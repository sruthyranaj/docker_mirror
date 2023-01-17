import { useMutation, useQueryClient } from "react-query";

import { useConfig } from "config";
import { SourceDefinitionService } from "core/domain/connector/SourceDefinitionService";
import { useDefaultRequestMiddlewares } from "services/useDefaultRequestMiddlewares";
import { useInitService } from "services/useInitService";
import { useCurrentWorkspaceId } from "services/workspaces/WorkspacesService";
import { isDefined } from "utils/common";

import {
  BuilderSourceDefinitionCreate,
  SourceDefinitionCreate,
  SourceDefinitionRead,
} from "../../core/request/AirbyteClient";
import { SCOPE_WORKSPACE } from "../Scope";
import { connectorDefinitionKeys } from "./ConnectorDefinitions";
import { useSuspenseQuery } from "./useSuspenseQuery";

export const sourceDefinitionKeys = {
  all: [SCOPE_WORKSPACE, "sourceDefinition"] as const,
  lists: () => [...sourceDefinitionKeys.all, "list"] as const,
  detail: (id: string) => [...sourceDefinitionKeys.all, "details", id] as const,
};

export function useGetSourceDefinitionService(): SourceDefinitionService {
  const { apiUrl } = useConfig();

  const requestAuthMiddleware = useDefaultRequestMiddlewares();

  return useInitService(
    () => new SourceDefinitionService(apiUrl, requestAuthMiddleware),
    [apiUrl, requestAuthMiddleware]
  );
}

export interface SourceDefinitionReadWithLatestTag extends SourceDefinitionRead {
  latestDockerImageTag?: string;
}

const useSourceDefinitionList = (): {
  sourceDefinitions: SourceDefinitionReadWithLatestTag[];
} => {
  const service = useGetSourceDefinitionService();
  const workspaceId = useCurrentWorkspaceId();

  return useSuspenseQuery(sourceDefinitionKeys.lists(), async () => {
    const [definition, latestDefinition] = await Promise.all([service.list(workspaceId), service.listLatest()]);

    const sourceDefinitions = definition.sourceDefinitions.map((source) => {
      const withLatest = latestDefinition.sourceDefinitions.find(
        (latestSource) => latestSource.sourceDefinitionId === source.sourceDefinitionId
      );

      return {
        ...source,
        latestDockerImageTag: withLatest?.dockerImageTag,
      };
    });

    return { sourceDefinitions };
  });
};

const useSourceDefinition = <T extends string | undefined>(
  sourceDefinitionId: T
): T extends string ? SourceDefinitionRead : SourceDefinitionRead | undefined => {
  const service = useGetSourceDefinitionService();
  const workspaceId = useCurrentWorkspaceId();

  return useSuspenseQuery(
    sourceDefinitionKeys.detail(sourceDefinitionId || ""),
    () => service.get({ workspaceId, sourceDefinitionId: sourceDefinitionId || "" }),
    {
      enabled: isDefined(sourceDefinitionId),
    }
  );
};

const useCreateSourceDefinition = () => {
  const service = useGetSourceDefinitionService();
  const queryClient = useQueryClient();
  const workspaceId = useCurrentWorkspaceId();

  return useMutation<SourceDefinitionRead, Error, SourceDefinitionCreate>(
    (sourceDefinition) => service.createCustom({ workspaceId, sourceDefinition }),
    {
      onSuccess: (data) => {
        queryClient.setQueryData(
          sourceDefinitionKeys.lists(),
          (oldData: { sourceDefinitions: SourceDefinitionRead[] } | undefined) => ({
            sourceDefinitions: [data, ...(oldData?.sourceDefinitions ?? [])],
          })
        );
      },
    }
  );
};

export const useCreateBuilderDefinition = () => {
  const service = useGetSourceDefinitionService();
  const queryClient = useQueryClient();
  const workspaceId = "a15a2027-bf1a-45e1-ad48-7d618a7f59e6"; // TODO - use useCurrentWorkspaceId() here which will be available once the connector builder route is part of the workspace

  return useMutation<SourceDefinitionRead, Error, Omit<BuilderSourceDefinitionCreate, "workspaceId">>(
    (builderDefinition) => service.createBuilder({ workspaceId, ...builderDefinition }),
    {
      onSuccess: (data) => {
        queryClient.setQueryData(
          sourceDefinitionKeys.lists(),
          (oldData: { sourceDefinitions: SourceDefinitionRead[] } | undefined) => ({
            sourceDefinitions: [data, ...(oldData?.sourceDefinitions ?? [])],
          })
        );
      },
    }
  );
};

const useUpdateSourceDefinition = () => {
  const service = useGetSourceDefinitionService();
  const queryClient = useQueryClient();

  return useMutation<
    SourceDefinitionRead,
    Error,
    {
      sourceDefinitionId: string;
      dockerImageTag: string;
    }
  >((sourceDefinition) => service.update(sourceDefinition), {
    onSuccess: (data) => {
      queryClient.setQueryData(sourceDefinitionKeys.detail(data.sourceDefinitionId), data);

      queryClient.setQueryData(
        sourceDefinitionKeys.lists(),
        (oldData: { sourceDefinitions: SourceDefinitionRead[] } | undefined) => ({
          sourceDefinitions:
            oldData?.sourceDefinitions.map((sd) => (sd.sourceDefinitionId === data.sourceDefinitionId ? data : sd)) ??
            [],
        })
      );

      queryClient.invalidateQueries(connectorDefinitionKeys.count());
    },
  });
};

export { useSourceDefinition, useSourceDefinitionList, useCreateSourceDefinition, useUpdateSourceDefinition };
