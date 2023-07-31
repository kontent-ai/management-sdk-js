import { PreviewContracts } from '../../contracts';
import { PreviewModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace PreviewResponses {
    export class PreviewConfigurationResponse extends BaseResponses.BaseContentManagementResponse<
        PreviewContracts.IPreviewConfigurationContract,
        PreviewModels.PreviewConfiguration
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: PreviewContracts.IPreviewConfigurationContract,
            data: PreviewModels.PreviewConfiguration
        ) {
            super(debug, rawData, data);
        }
    }

    export class ModifyConfigurationResponse extends BaseResponses.BaseContentManagementResponse<
        PreviewContracts.IPreviewConfigurationContract,
        PreviewModels.PreviewConfiguration
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: PreviewContracts.IPreviewConfigurationContract,
            data: PreviewModels.PreviewConfiguration
        ) {
            super(debug, rawData, data);
        }
    }
}
