import { LanguageVariantModels } from '../../models';
import { IManagementClientConfig } from '../../config';
import { LanguageVariantResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class BulkGetItemsWithVariantsQuery extends BaseListingQuery<
    LanguageVariantResponses.BulkGetItemsWithVariantsResponse,
    LanguageVariantResponses.ListAllBulkGetItemsWithVariantsResponse
> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected data: LanguageVariantModels.IBulkGetItemsWithVariantsData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<LanguageVariantResponses.BulkGetItemsWithVariantsResponse> {
        return this.queryService.bulkGetItemsWithVariantsAsync(this.getUrl(), this.data, this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.bulkGetItemsWithVariants();
    }

    protected allResponseFactory(
        items: any[],
        responses: LanguageVariantResponses.BulkGetItemsWithVariantsResponse[]
    ): LanguageVariantResponses.ListAllBulkGetItemsWithVariantsResponse {
        return new LanguageVariantResponses.ListAllBulkGetItemsWithVariantsResponse({
            items: items,
            responses: responses
        });
    }
}
