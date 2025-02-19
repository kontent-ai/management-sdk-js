import { IManagementClientConfig } from '../../config';
import { CustomAppsResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListCustomAppsQuery extends BaseListingQuery<
    CustomAppsResponses.CustomAppsListResponse,
    CustomAppsResponses.CustomAppsListAllResponse
> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<CustomAppsResponses.CustomAppsListResponse> {
        return this.queryService.listCustomAppsAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listCustomApps();
    }

    protected allResponseFactory(
        items: any[],
        responses: CustomAppsResponses.CustomAppsListResponse[]
    ): CustomAppsResponses.CustomAppsListAllResponse {
        return new CustomAppsResponses.CustomAppsListAllResponse({
            items: items,
            responses: responses
        });
    }
}
