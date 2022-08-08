import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageVariantResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListLanguageVariantsByCollectionQuery extends BaseListingQuery<
    LanguageVariantResponses.ListLanguageVariantsByCollectionResponse,
    LanguageVariantResponses.ListAllLanguageVariantsByCollectionResponse
> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected identifier: Identifiers.CollectionIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<LanguageVariantResponses.ListLanguageVariantsByCollectionResponse> {
        return this.queryService.listLanguageVariantsByCollectionAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listLanguageVariantsByCollection(this.identifier);
    }

    protected allResponseFactory(
        items: any[],
        responses: LanguageVariantResponses.ListLanguageVariantsByCollectionResponse[]
    ): LanguageVariantResponses.ListAllLanguageVariantsByCollectionResponse {
        return new LanguageVariantResponses.ListAllLanguageVariantsByCollectionResponse({
            items: items,
            responses: responses
        });
    }
}
