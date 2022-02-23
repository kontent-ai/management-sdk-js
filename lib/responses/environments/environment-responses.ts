import { BaseResponses } from '../base-responses';
import { EnvironmentContracts } from '../../contracts';
import { EnvironmentModels } from '../../models/environments/environment.models';

export namespace EnvironmentResponses {
    export class GetCloningStateResponse extends BaseResponses.BaseContentManagementResponse<EnvironmentContracts.IEnvironmentCloningStateResponseContract, {
        cloningInfo: EnvironmentModels.EnvironmentCloningStateModel
    }> {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: EnvironmentContracts.IEnvironmentCloningStateResponseContract,
            data: {
                cloningInfo: EnvironmentModels.EnvironmentCloningStateModel
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class ModifyEnvironmentResponse extends BaseResponses.BaseContentManagementResponse<
        EnvironmentContracts.IModifyEnvironmentResponseContract, EnvironmentModels.EnvironmentModel
        > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: EnvironmentContracts.IModifyEnvironmentResponseContract,
            data: EnvironmentModels.EnvironmentModel
        ) {
            super(debug, rawData, data);
        }
    }

    export class CloneEnvironmentResponse extends BaseResponses.BaseContentManagementResponse<EnvironmentContracts.ICloneEnvironmentResponseContract, EnvironmentModels.CloneEnvironmentModel
        > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: EnvironmentContracts.ICloneEnvironmentResponseContract,
            data: EnvironmentModels.CloneEnvironmentModel
        ) {
            super(debug, rawData, data);
        }
    }
}
