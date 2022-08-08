import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { SubscriptionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ViewSubscriptionProjectQuery extends BaseQuery<SubscriptionResponses.ViewSubscriptionProjectResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public identifier: Identifiers.ProjectIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<SubscriptionResponses.ViewSubscriptionProjectResponse> {
        return this.queryService.viewSubscriptionProjectAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.viewSubscriptionProject(this.identifier);
    }
}
