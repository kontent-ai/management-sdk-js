import { ProjectUserContracts } from '../../contracts';
import { ProjectUserModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace ProjectUsersResponses {
    export class InviteUserResponse extends BaseResponses.BaseContentManagementResponse<
        ProjectUserContracts.IInviteUserResponseContract,
        ProjectUserModels.ProjectUser
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ProjectUserContracts.IInviteUserResponseContract,
            data: ProjectUserModels.ProjectUser
        ) {
            super(debug, rawData, data);
        }
    }

    export class ChangeUserRolesResponse extends BaseResponses.BaseContentManagementResponse<
        ProjectUserContracts.IChangeUserRolesResponseContract,
        ProjectUserModels.ProjectUser
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ProjectUserContracts.IChangeUserRolesResponseContract,
            data: ProjectUserModels.ProjectUser
        ) {
            super(debug, rawData, data);
        }
    }
}
