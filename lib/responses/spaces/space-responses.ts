import { ContentItemContracts } from '../../contracts';
import { ContentItemModels, SharedModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace SpaceResponses {

    export class SpacesResponse extends BaseResponses.BaseContentManagementListResponse<ContentItemContracts.IContentItemsListingResponseContract, ContentItemModels.ContentItem>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ContentItemContracts.IContentItemsListingResponseContract,
            data: {
                items: ContentItemModels.ContentItem[],
                pagination: SharedModels.Pagination
            }
        ) {
            super(debug, rawData, data);
        }
    }
    export class ViewContentItemResponse extends BaseResponses.BaseContentManagementResponse<ContentItemContracts.IViewContentItemResponseContract, ContentItemModels.ContentItem> {

        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ContentItemContracts.IViewContentItemResponseContract,
            data: ContentItemModels.ContentItem
        ) {
            super(debug, rawData, data);
        }
    }
}