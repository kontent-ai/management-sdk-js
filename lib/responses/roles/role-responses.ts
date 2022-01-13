import { RoleContracts } from '../../contracts';
import { RoleModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace RoleResponses {
    export class RoleListResponse extends BaseResponses.BaseContentManagementResponse<
        RoleContracts.IRoleListResponseContract,
        {
            roles: RoleModels.Role[];
        }
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: RoleContracts.IRoleListResponseContract,
            data: {
                roles: RoleModels.Role[];
            }
        ) {
            super(debug, rawData, data);
        }
    }
}
