import { IManagementClientConfig } from '../../config';
import { TaxonomyResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListTaxonomiesQuery extends BaseListingQuery<
    TaxonomyResponses.TaxonomyListResponse,
    TaxonomyResponses.ListAllTaxonomiesResponse
> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<TaxonomyResponses.TaxonomyListResponse> {
        return this.queryService.listTaxonomiesAsync(this.getUrl(), this.queryConfig);
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
