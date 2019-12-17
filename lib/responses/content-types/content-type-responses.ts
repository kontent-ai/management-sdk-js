import { ContentTypeContracts } from '../../contracts';
import { ContentTypeModels, SharedModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace ContentTypeResponses {

    export class ContentTypeListResponse extends BaseResponses.BaseContentManagementListResponse<ContentTypeContracts.IContentTypeListResponseContract, ContentTypeModels.ContentType>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ContentTypeContracts.IContentTypeListResponseContract,
            data: {
                items: ContentTypeModels.ContentType[],
                pagination: SharedModels.Pagination
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class ContentTypeListAllResponse extends BaseResponses.ContentManagementListAllResponse<ContentTypeListResponse, ContentTypeModels.ContentType> {
        constructor(
            data: {
                items: ContentTypeModels.ContentType[],
                responses: ContentTypeListResponse[]
            }
        ) {
            super(data);
        }
    }

    export class ModifyContentTypeResponse extends BaseResponses.BaseContentManagementResponse<ContentTypeContracts.IViewContentTypeResponseContract, ContentTypeModels.ContentType>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ContentTypeContracts.IViewContentTypeResponseContract,
            data: ContentTypeModels.ContentType
        ) {
            super(debug, rawData, data);
        }
    }

    export class ViewContentTypeResponse extends BaseResponses.BaseContentManagementResponse<ContentTypeContracts.IViewContentTypeResponseContract, ContentTypeModels.ContentType>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ContentTypeContracts.IViewContentTypeResponseContract,
            data: ContentTypeModels.ContentType
        ) {
            super(debug, rawData, data);
        }
    }

    export class AddContentTypeResponse extends BaseResponses.BaseContentManagementResponse<ContentTypeContracts.IAddContentTypeResponseContract, ContentTypeModels.ContentType>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ContentTypeContracts.IAddContentTypeResponseContract,
            data: ContentTypeModels.ContentType
        ) {
            super(debug, rawData, data);
        }
    }
}

