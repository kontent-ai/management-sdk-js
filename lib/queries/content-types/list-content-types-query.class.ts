import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../../config';
import { ContentTypeResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListContentTypesQuery extends BaseListingQuery<
    ContentTypeResponses.ContentTypeListResponse,
    ContentTypeResponses.ContentTypeListAllResponse
> {
    constructor(protected config: IManagementClientConfig, protected queryService: ContentManagementQueryService) {
        super(config, queryService);
    }

    toObservable(): Observable<ContentTypeResponses.ContentTypeListResponse> {
        return this.queryService.listContentTypes(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listContentTypes();
    }

    protected allResponseFactory(
        items: any[],
        responses: ContentTypeResponses.ContentTypeListResponse[]
    ): ContentTypeResponses.ContentTypeListAllResponse {
        return new ContentTypeResponses.ContentTypeListAllResponse({
            items: items,
            responses: responses
        });
    }
}
