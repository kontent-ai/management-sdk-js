import { ProjectUserModels } from '../../models';
import { IManagementClientConfig } from '../../config';
import { ProjectUsersResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class InviteProjectUserQuery extends BaseQuery<ProjectUsersResponses.InviteUserResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        private data: ProjectUserModels.IInviteUserData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<ProjectUsersResponses.InviteUserResponse> {
        return this.queryService.inviteProjectUser(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.inviteProjectUser();
    }
}
