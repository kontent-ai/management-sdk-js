import { IBaseResponse } from '@kentico/kontent-core';

import { ContentTypeContracts } from '../contracts';
import { ContentTypeModels } from '../models';
import { ContentTypeResponses } from '../responses';
import { BaseMapper } from './base-mapper';
import { elementsMapper } from './elements-mapper';

export class ContentTypeMapper extends BaseMapper {

    mapListingResponse(response: IBaseResponse<ContentTypeContracts.IContentTypeListResponseContract>): ContentTypeResponses.ContentTypeListResponse {
        return new ContentTypeResponses.ContentTypeListResponse(
            super.mapResponseDebug(response), response.data, {
                items: response.data.types.map(m => this.mapContentType(m)),
                pagination: super.mapPagination(response.data.pagination)
            }
        );
    }

    mapViewContentTypeResponse(response: IBaseResponse<ContentTypeContracts.IViewContentTypeResponseContract>): ContentTypeResponses.ViewContentTypeResponse {
        return new ContentTypeResponses.ViewContentTypeResponse(
            super.mapResponseDebug(response), response.data, this.mapContentType(response.data)
        );
    }

    mapModifyContentTypeResponse(response: IBaseResponse<ContentTypeContracts.IModifyContentTypeResponseContract>): ContentTypeResponses.ModifyContentTypeResponse {
        return new ContentTypeResponses.ModifyContentTypeResponse(
            super.mapResponseDebug(response), response.data, this.mapContentType(response.data)
        );
    }

    mapAddContentTypeResponse(response: IBaseResponse<ContentTypeContracts.IAddContentTypeResponseContract>): ContentTypeResponses.AddContentTypeResponse {
        return new ContentTypeResponses.AddContentTypeResponse(
            super.mapResponseDebug(response), response.data, this.mapContentType(response.data)
        );
    }

    mapContentType(rawContentType: ContentTypeContracts.IContentTypeContract): ContentTypeModels.ContentType {
        return new ContentTypeModels.ContentType({
            codename: rawContentType.codename,
            id: rawContentType.id,
            name: rawContentType.name,
            elements: elementsMapper.mapTypeElements(rawContentType.elements),
            lastModified: new Date(rawContentType.last_modified),
            externalId: rawContentType.external_id,
            contentGroups: rawContentType.content_groups ? rawContentType.content_groups.map(m => this.mapContentTypeGroup(m)) : undefined,
            _raw: rawContentType
        });
    }

    mapContentTypeGroup(rawContentTypeGroup: ContentTypeContracts.IContentTypeGroup): ContentTypeModels.ContentTypeGroup {
        return new ContentTypeModels.ContentTypeGroup({
            name: rawContentTypeGroup.name,
            codename: rawContentTypeGroup.codename,
            externalId: rawContentTypeGroup.external_id,
            id: rawContentTypeGroup.id
        });
    }

}

export const contentTypeMapper = new ContentTypeMapper();
