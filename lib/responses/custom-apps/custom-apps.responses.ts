import { CustomAppsContracts } from '../../contracts';
import { CustomAppModels } from '../../models';
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

    export class ListCustomAppsResponse extends BaseResponses.BaseContentManagementResponse<
        CustomAppsContracts.ICustomAppContract[],
        CustomAppModels.CustomApp[]
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: CustomAppsContracts.ICustomAppContract[],
            data: CustomAppModels.CustomApp[]
        ) {
            super(debug, rawData, data);
        }
    }

    export class ModifyCustomAppResponse extends AddCustomAppResponse {}
    export class GetCustomAppResponse extends AddCustomAppResponse {}
}
