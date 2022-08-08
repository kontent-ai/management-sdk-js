import { Identifiers, ProjectUserModels } from '../../models';
import { IManagementClientConfig } from '../../config';
import { ProjectUsersResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ChangeUserRolesQuery extends BaseQuery<ProjectUsersResponses.ChangeUserRolesResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        private identifier: Identifiers.UserIdentifier,
        private data: ProjectUserModels.IChangeUserRoleData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<ProjectUsersResponses.ChangeUserRolesResponse> {
        return this.queryService.changeUserRolesAsync(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.changeProjectUserRoles(this.identifier);
    }
}
