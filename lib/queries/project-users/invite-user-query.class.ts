import { ProjectUserModels } from '../../models';
import { IManagementClientConfig } from '../../config';
import { ProjectUsersResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class InviteProjectUserQuery extends BaseQuery<ProjectUsersResponses.InviteUserResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        private data: ProjectUserModels.IInviteUserData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<ProjectUsersResponses.InviteUserResponse> {
        return this.queryService.inviteProjectUserAsync(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.inviteProjectUser();
    }
}
