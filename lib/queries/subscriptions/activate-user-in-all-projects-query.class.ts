import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { BaseResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ActivateUserInAllProjectsQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public identifier: Identifiers.UserIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<BaseResponses.EmptyContentManagementResponse> {
        return this.queryService.activateUserInAllProjects(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.activateUserInAllProjects(this.identifier);
    }
}