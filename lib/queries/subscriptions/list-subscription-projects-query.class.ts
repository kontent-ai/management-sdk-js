import { IManagementClientConfig } from '../../config';
import { SubscriptionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListSubscriptionProjectsQuery extends BaseListingQuery<
    SubscriptionResponses.SubscriptionProjectsListResponse,
    SubscriptionResponses.SubscriptionProjectsListAllResponse
> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<SubscriptionResponses.SubscriptionProjectsListResponse> {
        return this.queryService.listSubscriptionProjectsAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listSubscriptionProjects();
    }

    protected allResponseFactory(
        items: any[],
        responses: SubscriptionResponses.SubscriptionProjectsListResponse[]
    ): SubscriptionResponses.SubscriptionProjectsListAllResponse {
        return new SubscriptionResponses.SubscriptionProjectsListAllResponse({
            items: items,
            responses: responses
        });
    }
}
