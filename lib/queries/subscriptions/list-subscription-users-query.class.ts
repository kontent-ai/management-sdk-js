import { IManagementClientConfig } from '../../config';
import { SubscriptionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListSubscriptionUsersQuery extends BaseListingQuery<
    SubscriptionResponses.SubscriptionUsersListResponse,
    SubscriptionResponses.SubscriptionUsersListAllResponse
> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<SubscriptionResponses.SubscriptionUsersListResponse> {
        return this.queryService.litSubscriptionUsersAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listSubscriptionUsers();
    }

    protected allResponseFactory(
        items: any[],
        responses: SubscriptionResponses.SubscriptionUsersListResponse[]
    ): SubscriptionResponses.SubscriptionUsersListAllResponse {
        return new SubscriptionResponses.SubscriptionUsersListAllResponse({
            items: items,
            responses: responses
        });
    }
}
