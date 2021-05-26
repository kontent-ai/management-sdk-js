

import { IManagementClientConfig } from '../../config';
import { ContentTypeSnippetResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListContentTypeSnippetsQuery extends BaseListingQuery<
    ContentTypeSnippetResponses.ContentTypeSnippetListResponse,
    ContentTypeSnippetResponses.ContentTypeSnippetListAllResponse
> {
    constructor(protected config: IManagementClientConfig, protected queryService: ContentManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<ContentTypeSnippetResponses.ContentTypeSnippetListResponse> {
        return this.queryService.listContentTypeSnippets(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listContentTypeSnippets();
    }

    protected allResponseFactory(
        items: any[],
        responses: ContentTypeSnippetResponses.ContentTypeSnippetListResponse[]
    ): ContentTypeSnippetResponses.ContentTypeSnippetListAllResponse {
        return new ContentTypeSnippetResponses.ContentTypeSnippetListAllResponse({
            items: items,
            responses: responses
        });
    }
}
