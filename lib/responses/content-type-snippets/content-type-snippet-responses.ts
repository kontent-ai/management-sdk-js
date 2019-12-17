import { ContentTypeSnippetContracts } from '../../contracts';
import { ContentTypeModels, SharedModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace ContentTypeSnippetResponses {

    export class ContentTypeSnippetListResponse extends BaseResponses.BaseContentManagementListResponse<ContentTypeSnippetContracts.IContentTypeSnippetListResponseContract, ContentTypeModels.ContentType>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ContentTypeSnippetContracts.IContentTypeSnippetListResponseContract,
            data: {
                items: ContentTypeModels.ContentType[],
                pagination: SharedModels.Pagination
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class ContentTypeSnippetListAllResponse extends BaseResponses.ContentManagementListAllResponse<ContentTypeSnippetListResponse, ContentTypeModels.ContentType> {
        constructor(
            data: {
                items: ContentTypeModels.ContentType[],
                responses: ContentTypeSnippetListResponse[]
            }
        ) {
            super(data);
        }
    }

    export class ViewContentTypeSnippetResponse extends BaseResponses.BaseContentManagementResponse<ContentTypeSnippetContracts.IViewContentTypeSnippetResponseContract, ContentTypeModels.ContentType>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ContentTypeSnippetContracts.IViewContentTypeSnippetResponseContract,
            data: ContentTypeModels.ContentType
        ) {
            super(debug, rawData, data);
        }
    }

    export class AddContentTypeSnippetResponse extends BaseResponses.BaseContentManagementResponse<ContentTypeSnippetContracts.IAddContentTypeSnippetResponseContract, ContentTypeModels.ContentType>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ContentTypeSnippetContracts.IAddContentTypeSnippetResponseContract,
            data: ContentTypeModels.ContentType
        ) {
            super(debug, rawData, data);
        }
    }
}

