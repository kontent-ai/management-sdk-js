import { BaseResponses } from '../base-responses';
import { EnvironmentContracts } from '../../contracts';
import { EnvironmentModels } from '../../models/environments/environments.model';

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
}
