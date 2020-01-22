import { ContentTypeSnippetContracts } from '../../contracts';
import { ContentTypeSnippetModels, SharedModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace ContentTypeSnippetResponses {
    export class ContentTypeSnippetListResponse extends BaseResponses.BaseContentManagementListResponse<
        ContentTypeSnippetContracts.IContentTypeSnippetListResponseContract,
        ContentTypeSnippetModels.ContentTypeSnippet
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ContentTypeSnippetContracts.IContentTypeSnippetListResponseContract,
            data: {
                items: ContentTypeSnippetModels.ContentTypeSnippet[];
                pagination: SharedModels.Pagination;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class ContentTypeSnippetListAllResponse extends BaseResponses.ContentManagementListAllResponse<
        ContentTypeSnippetListResponse,
        ContentTypeSnippetModels.ContentTypeSnippet
    > {
        constructor(data: {
            items: ContentTypeSnippetModels.ContentTypeSnippet[];
            responses: ContentTypeSnippetListResponse[];
        }) {
            super(data);
        }
    }

    export class ViewContentTypeSnippetResponse extends BaseResponses.BaseContentManagementResponse<
        ContentTypeSnippetContracts.IViewContentTypeSnippetResponseContract,
        ContentTypeSnippetModels.ContentTypeSnippet
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ContentTypeSnippetContracts.IViewContentTypeSnippetResponseContract,
            data: ContentTypeSnippetModels.ContentTypeSnippet
        ) {
            super(debug, rawData, data);
        }
    }

    export class AddContentTypeSnippetResponse extends BaseResponses.BaseContentManagementResponse<
        ContentTypeSnippetContracts.IAddContentTypeSnippetResponseContract,
        ContentTypeSnippetModels.ContentTypeSnippet
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ContentTypeSnippetContracts.IAddContentTypeSnippetResponseContract,
            data: ContentTypeSnippetModels.ContentTypeSnippet
        ) {
            super(debug, rawData, data);
        }
    }

    export class ModifyContentTypeSnippetResponse extends BaseResponses.BaseContentManagementResponse<
        ContentTypeSnippetContracts.IModifyContentTypeSnippetResponseContract,
        ContentTypeSnippetModels.ContentTypeSnippet
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ContentTypeSnippetContracts.IModifyContentTypeSnippetResponseContract,
            data: ContentTypeSnippetModels.ContentTypeSnippet
        ) {
            super(debug, rawData, data);
        }
    }
}
