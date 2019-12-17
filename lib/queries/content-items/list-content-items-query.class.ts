import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../../config';
import { ContentItemResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListContentItemsQuery extends BaseListingQuery<
    ContentItemResponses.ContentItemsResponse,
    ContentItemResponses.ContentItemsListAllResponse
> {
    constructor(protected config: IManagementClientConfig, protected queryService: ContentManagementQueryService) {
        super(config, queryService);
    }

    toObservable(): Observable<ContentItemResponses.ContentItemsResponse> {
        return this.queryService.listContentItems(this.getUrl(), this.queryConfig);
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
