

import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageVariantResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListLanguageVariantsOfContentTypeQuery extends BaseListingQuery<
    LanguageVariantResponses.ListLanguageVariantsOfContentTypeResponse,
    LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeResponse
> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        protected identifier: Identifiers.ContentTypeIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<LanguageVariantResponses.ListLanguageVariantsOfContentTypeResponse> {
        return this.queryService.listLanguageVariantsOfContentType(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listLanguageVariantsOfContentType(this.identifier);
    }

    protected allResponseFactory(
        items: any[],
        responses: LanguageVariantResponses.ListLanguageVariantsOfContentTypeResponse[]
    ): LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeResponse {
        return new LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeResponse({
            items: items,
            responses: responses
        });
    }
}
