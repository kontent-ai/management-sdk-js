import { IResponse } from '@kontent-ai/core-sdk';

import { ContentItemContracts } from '../contracts';
import { ContentItemModels } from '../models';
import { ContentItemResponses } from '../responses';
import { BaseMapper } from './base-mapper';

export class ContentItemsMapper extends BaseMapper {

    mapListingItemsResponse(
        response: IResponse<ContentItemContracts.IContentItemsListingResponseContract>
    ): ContentItemResponses.ContentItemsResponse {

        const pagination = super.mapPagination(response.data.pagination);
        const items = response.data.items.map(m => this.mapContentItem(m));

        return new ContentItemResponses.ContentItemsResponse(super.mapResponseDebug(response), response.data, {
            pagination: pagination,
            items: items
        });
    }

    mapViewContentItemResponse(
        response: IResponse<ContentItemContracts.IContentItemModelContract>
    ): ContentItemResponses.ViewContentItemResponse {
        return new ContentItemResponses.ViewContentItemResponse(super.mapResponseDebug(response), response.data, this.mapContentItem(response.data));
    }

    mapAddContentItemResponse(
        response: IResponse<ContentItemContracts.IAddContentItemResponseContract>
    ): ContentItemResponses.AddContentItemResponse {
        return new ContentItemResponses.AddContentItemResponse(super.mapResponseDebug(response), response.data, this.mapContentItem(response.data));
    }

    mapUpdateContentItemResponse(
        response: IResponse<ContentItemContracts.IUpdateContentItemResponseContract>
    ): ContentItemResponses.UpdateContentItemResponse {
        return new ContentItemResponses.UpdateContentItemResponse(super.mapResponseDebug(response), response.data, this.mapContentItem(response.data));
    }

    mapUpsertContentItemResponse(
        response: IResponse<ContentItemContracts.IUpsertContentItemResponseContract>
    ): ContentItemResponses.UpsertContentItemResponse {
        return new ContentItemResponses.UpsertContentItemResponse(super.mapResponseDebug(response), response.data, this.mapContentItem(response.data));
    }

    mapContentItem(rawItem: ContentItemContracts.IContentItemModelContract): ContentItemModels.ContentItem {
        return new ContentItemModels.ContentItem({
            codename: rawItem.codename,
            externalId: rawItem.external_id,
            id: rawItem.id,
            lastModified: new Date(rawItem.last_modified),
            name: rawItem.name,
            type: rawItem.type,
            collection: super.mapReference(rawItem.collection),
            _raw: rawItem
        });
    }
}

export const contentItemsMapper = new ContentItemsMapper();
