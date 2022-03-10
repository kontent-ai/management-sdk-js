import { AssetRenditionContracts } from '../../contracts';
import { AssetRenditionModels, SharedModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace AssetRenditionResponses {
    export class AssetRenditionsListResponse extends BaseResponses.BaseContentManagementListResponse<
        AssetRenditionContracts.IListRenditionResponseContract,
        AssetRenditionModels.AssetRendition
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: AssetRenditionContracts.IListRenditionResponseContract,
            data: {
                items: AssetRenditionModels.AssetRendition[];
                pagination: SharedModels.Pagination;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class AssetRenditionsListAllResponse extends BaseResponses.ContentManagementListAllResponse<
        AssetRenditionsListResponse,
        AssetRenditionModels.AssetRendition
    > {
        constructor(data: { items: AssetRenditionModels.AssetRendition[]; responses: AssetRenditionsListResponse[] }) {
            super(data);
        }
    }

    export class ModifyAssetRenditionResponse extends BaseResponses.BaseContentManagementResponse<
        AssetRenditionContracts.IModifyAssetRenditionResponseContract,
        AssetRenditionModels.AssetRendition
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: AssetRenditionContracts.IModifyAssetRenditionResponseContract,
            data: AssetRenditionModels.AssetRendition
        ) {
            super(debug, rawData, data);
        }
    }

    export class ViewAssetRenditionResponse extends BaseResponses.BaseContentManagementResponse<
        AssetRenditionContracts.IViewRenditionResponseContract,
        AssetRenditionModels.AssetRendition
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: AssetRenditionContracts.IViewRenditionResponseContract,
            data: AssetRenditionModels.AssetRendition
        ) {
            super(debug, rawData, data);
        }
    }

    export class AddAssetRenditionResponse extends BaseResponses.BaseContentManagementResponse<
        AssetRenditionContracts.IAddAssetRenditionResponseContract,
        AssetRenditionModels.AssetRendition
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: AssetRenditionContracts.IAddAssetRenditionResponseContract,
            data: AssetRenditionModels.AssetRendition
        ) {
            super(debug, rawData, data);
        }
    }
}
