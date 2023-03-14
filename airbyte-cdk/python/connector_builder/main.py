#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#


import sys
from typing import Any, List, Mapping, Tuple

from airbyte_cdk.models import ConfiguredAirbyteCatalog
from airbyte_cdk.sources.declarative.manifest_declarative_source import ManifestDeclarativeSource
from connector_builder.connector_builder_handler import read_stream

from typing import Any, List, Mapping

from airbyte_cdk.connector import BaseConnector
from airbyte_cdk.entrypoint import AirbyteEntrypoint
from airbyte_cdk.sources.declarative.manifest_declarative_source import ManifestDeclarativeSource
from connector_builder.connector_builder_handler import resolve_manifest

def create_source(config: Mapping[str, Any], debug: bool) -> ManifestDeclarativeSource:
    manifest = config.get("__injected_declarative_manifest")
    return ManifestDeclarativeSource(manifest, debug)


def get_config_and_catalog_from_args(args: List[str]) -> Tuple[Mapping[str, Any], ConfiguredAirbyteCatalog]:
    parsed_args = AirbyteEntrypoint.parse_args(args)
    config_path, catalog_path = parsed_args.config, parsed_args.catalog
    if parsed_args.command != "read":
        raise ValueError("Only read commands are allowed for Connector Builder requests.")

    config = BaseConnector.read_config(parsed_args.config)
    catalog = ConfiguredAirbyteCatalog.parse_obj(BaseConnector.read_config(parsed_args.catalog))

    if "__injected_declarative_manifest" not in config:
        raise ValueError(
            f"Invalid config: `__injected_declarative_manifest` should be provided at the root of the config but config only has keys {list(config.keys())}"
        )

    return config, catalog


def handle_connector_builder_request(source: ManifestDeclarativeSource, config: Mapping[str, Any], catalog: ConfiguredAirbyteCatalog):
    command = config.get("__command")
    if command == "resolve_manifest":
        return resolve_manifest(source)
    elif command == "test_read":
        return read_stream(source, config, catalog)
    else:
        raise ValueError(f"Unrecognized command {command}.")


def handle_request(args: List[str]):
    config, catalog = get_config_and_catalog_from_args(args)
    if "__command" in config:
        source = create_source(config, True)
        print(handle_connector_builder_request(source, config, catalog))
    else:
        raise ValueError("Missing __command argument in config file.")


if __name__ == "__main__":
    handle_request(sys.argv[1:])
