import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageVariantResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListLanguageVariantsOfContentTypeWithComponentsQuery extends BaseListingQuery<
    LanguageVariantResponses.ListLanguageVariantsOfContentTypeWithComponentsResponse,
    LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeWithComponentsResponse
> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        protected identifier: Identifiers.ContentTypeIdentifier
    ) {
        super(config, queryService);
    }

    toObservable(): Observable<LanguageVariantResponses.ListLanguageVariantsOfContentTypeWithComponentsResponse> {
        return this.queryService.listLanguageVariantsOfContentTypeWithComponents(this.getUrl(), this.queryConfig);
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
