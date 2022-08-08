

import { IManagementClientConfig } from '../../config';
import { ContentItemResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListContentItemsQuery extends BaseListingQuery<
    ContentItemResponses.ContentItemsResponse,
    ContentItemResponses.ContentItemsListAllResponse
> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<ContentItemResponses.ContentItemsResponse> {
        return this.queryService.listContentItemsAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.items();
    }

    protected allResponseFactory(
        items: any[],
        responses: ContentItemResponses.ContentItemsResponse[]
    ): ContentItemResponses.ContentItemsListAllResponse {
        return new ContentItemResponses.ContentItemsListAllResponse({
            items: items,
            responses: responses
        });
    }
}
