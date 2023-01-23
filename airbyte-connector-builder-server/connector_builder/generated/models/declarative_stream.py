# coding: utf-8

from __future__ import annotations
from datetime import date, datetime  # noqa: F401

import re  # noqa: F401
from typing import Any, Dict, List, Optional  # noqa: F401

from pydantic import AnyUrl, BaseModel, EmailStr, Field, validator  # noqa: F401
from connector_builder.generated.models.any_of_add_fields_remove_fields import AnyOfAddFieldsRemoveFields
from connector_builder.generated.models.any_of_json_file_schema_loader_default_schema_loader import AnyOfJsonFileSchemaLoaderDefaultSchemaLoader
from connector_builder.generated.models.any_ofarrayarraystring import AnyOfarrayarraystring
from connector_builder.generated.models.any_ofarraystring import AnyOfarraystring
from connector_builder.generated.models.simple_retriever import SimpleRetriever


class DeclarativeStream(BaseModel):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.

    DeclarativeStream - a model defined in OpenAPI

        retriever: The retriever of this DeclarativeStream.
        config: The config of this DeclarativeStream.
        name: The name of this DeclarativeStream [Optional].
        primary_key: The primary_key of this DeclarativeStream [Optional].
        schema_loader: The schema_loader of this DeclarativeStream [Optional].
        name: The name of this DeclarativeStream [Optional].
        primary_key: The primary_key of this DeclarativeStream [Optional].
        schema_loader: The schema_loader of this DeclarativeStream [Optional].
        stream_cursor_field: The stream_cursor_field of this DeclarativeStream [Optional].
        transformations: The transformations of this DeclarativeStream [Optional].
        checkpoint_interval: The checkpoint_interval of this DeclarativeStream [Optional].
    """

    retriever: SimpleRetriever = Field(alias="retriever")
    config: Dict[str, Any] = Field(alias="config")
    name: Optional[str] = Field(alias="name", default=None)
    primary_key: Optional[AnyOfarrayarraystring] = Field(alias="primary_key", default=None)
    schema_loader: Optional[AnyOfJsonFileSchemaLoaderDefaultSchemaLoader] = Field(alias="schema_loader", default=None)
    name: Optional[str] = Field(alias="_name", default=None)
    primary_key: Optional[str] = Field(alias="_primary_key", default=None)
    schema_loader: Optional[AnyOfJsonFileSchemaLoaderDefaultSchemaLoader] = Field(alias="_schema_loader", default=None)
    stream_cursor_field: Optional[AnyOfarraystring] = Field(alias="stream_cursor_field", default=None)
    transformations: Optional[List[AnyOfAddFieldsRemoveFields]] = Field(alias="transformations", default=None)
    checkpoint_interval: Optional[int] = Field(alias="checkpoint_interval", default=None)

DeclarativeStream.update_forward_refs()