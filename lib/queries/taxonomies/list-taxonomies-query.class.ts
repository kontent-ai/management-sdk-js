import { IManagementClientConfig } from '../../config';
import { TaxonomyResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListTaxonomiesQuery extends BaseListingQuery<
    TaxonomyResponses.TaxonomyListResponse,
    TaxonomyResponses.ListAllTaxonomiesResponse
> {
    constructor(protected config: IManagementClientConfig, protected queryService: ContentManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<TaxonomyResponses.TaxonomyListResponse> {
        return this.queryService.listTaxonomies(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listTaxonomies();
    }

    protected allResponseFactory(
        items: any[],
        responses: TaxonomyResponses.TaxonomyListResponse[]
    ): TaxonomyResponses.ListAllTaxonomiesResponse {
        return new TaxonomyResponses.ListAllTaxonomiesResponse({
            items: items,
            responses: responses
        });
    }
}
