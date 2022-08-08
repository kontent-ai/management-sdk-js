

import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageVariantResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListLanguageVariantsOfContentTypeWithComponentsQuery extends BaseListingQuery<
    LanguageVariantResponses.ListLanguageVariantsOfContentTypeWithComponentsResponse,
    LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeWithComponentsResponse
> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected identifier: Identifiers.ContentTypeIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<LanguageVariantResponses.ListLanguageVariantsOfContentTypeWithComponentsResponse> {
        return this.queryService.listLanguageVariantsOfContentTypeWithComponentsAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listLanguageVariantsOfContentTypeWithComponents(this.identifier);
    }

    protected allResponseFactory(
        items: any[],
        responses: LanguageVariantResponses.ListLanguageVariantsOfContentTypeWithComponentsResponse[]
    ): LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeWithComponentsResponse {
        return new LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeWithComponentsResponse({
            items: items,
            responses: responses
        });
    }
}
