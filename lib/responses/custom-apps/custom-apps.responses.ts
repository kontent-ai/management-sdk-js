import { CustomAppsContracts } from '../../contracts';
import { CustomAppModels, SharedModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace CustomAppsResponses {
    export class AddCustomAppResponse extends BaseResponses.BaseContentManagementResponse<
        CustomAppsContracts.ICustomAppContract,
        CustomAppModels.CustomApp
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: CustomAppsContracts.ICustomAppContract,
            data: CustomAppModels.CustomApp
        ) {
            super(debug, rawData, data);
        }
    }

    export class CustomAppsListResponse extends BaseResponses.BaseContentManagementListResponse<
        CustomAppsContracts.ICustomAppsListResponseContract,
        CustomAppModels.CustomApp
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: CustomAppsContracts.ICustomAppsListResponseContract,
            data: {
                items: CustomAppModels.CustomApp[];
                pagination: SharedModels.Pagination;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class CustomAppsListAllResponse extends BaseResponses.ContentManagementListAllResponse<
        CustomAppsListResponse,
        CustomAppModels.CustomApp
    > {
        constructor(data: { items: CustomAppModels.CustomApp[]; responses: CustomAppsListResponse[] }) {
            super(data);
        }
    }

    export class ModifyCustomAppResponse extends AddCustomAppResponse {}
    export class GetCustomAppResponse extends AddCustomAppResponse {}
}
