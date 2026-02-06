import { LanguageVariantModels } from '../../models';
import { IManagementClientConfig } from '../../config';
import { LanguageVariantResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class FilterItemsWithVariantsQuery extends BaseListingQuery<
    LanguageVariantResponses.FilterItemsWithVariantsResponse,
    LanguageVariantResponses.ListAllFilterItemsWithVariantsResponse
> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected data: LanguageVariantModels.IFilterItemsWithVariantsData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<LanguageVariantResponses.FilterItemsWithVariantsResponse> {
        return this.queryService.filterItemsWithVariantsAsync(this.getUrl(), this.data, this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.filterItemsWithVariants();
    }

    protected allResponseFactory(
        items: any[],
        responses: LanguageVariantResponses.FilterItemsWithVariantsResponse[]
    ): LanguageVariantResponses.ListAllFilterItemsWithVariantsResponse {
        return new LanguageVariantResponses.ListAllFilterItemsWithVariantsResponse({
            items: items,
            responses: responses
        });
    }
}
