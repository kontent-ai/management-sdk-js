import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { SubscriptionResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ViewSubscriptionUserQuery extends BaseQuery<SubscriptionResponses.ViewSubscriptionUserResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public identifier: Identifiers.UserIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<SubscriptionResponses.ViewSubscriptionUserResponse> {
        return this.queryService.viewSubscriptionUser(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.viewSubscriptionUser(this.identifier);
    }
}
