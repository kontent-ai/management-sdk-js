import { LanguageVariantModels } from '../../models';
import { IManagementClientConfig } from '../../config';
import { LanguageVariantResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class FilterLanguageVariantsQuery extends BaseListingQuery<
    LanguageVariantResponses.FilterLanguageVariantsResponse,
    LanguageVariantResponses.ListAllFilterLanguageVariantsResponse
> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected data: LanguageVariantModels.IFilterLanguageVariantsData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<LanguageVariantResponses.FilterLanguageVariantsResponse> {
        return this.queryService.filterLanguageVariantsAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.filterLanguageVariants();
    }

    protected allResponseFactory(
        items: any[],
        responses: LanguageVariantResponses.FilterLanguageVariantsResponse[]
    ): LanguageVariantResponses.ListAllFilterLanguageVariantsResponse {
        return new LanguageVariantResponses.ListAllFilterLanguageVariantsResponse({
            items: items,
            responses: responses
        });
    }
}
