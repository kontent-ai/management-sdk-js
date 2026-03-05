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

    export class LivePreviewConfigurationResponse extends BaseResponses.BaseContentManagementResponse<
        PreviewContracts.ILivePreviewConfigurationContract,
        PreviewModels.LivePreviewConfiguration
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: PreviewContracts.ILivePreviewConfigurationContract,
            data: PreviewModels.LivePreviewConfiguration
        ) {
            super(debug, rawData, data);
        }
    }

    export class ChangeLivePreviewConfigurationResponse extends BaseResponses.BaseContentManagementResponse<
        PreviewContracts.ILivePreviewConfigurationContract,
        PreviewModels.LivePreviewConfiguration
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: PreviewContracts.ILivePreviewConfigurationContract,
            data: PreviewModels.LivePreviewConfiguration
        ) {
            super(debug, rawData, data);
        }
    }
}
