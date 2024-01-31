import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageVariantResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListLanguageVariantsBySpaceQuery extends BaseListingQuery<
    LanguageVariantResponses.ListLanguageVariantsBySpaceResponse,
    LanguageVariantResponses.ListAllLanguageVariantsBySpaceResponse
> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected identifier: Identifiers.SpaceIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<LanguageVariantResponses.ListLanguageVariantsBySpaceResponse> {
        return this.queryService.listLanguageVariantsBySpaceAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listLanguageVariantsBySpace(this.identifier);
    }

    protected allResponseFactory(
        items: any[],
        responses: LanguageVariantResponses.ListLanguageVariantsBySpaceResponse[]
    ): LanguageVariantResponses.ListAllLanguageVariantsBySpaceResponse {
        return new LanguageVariantResponses.ListAllLanguageVariantsBySpaceResponse({
            items: items,
            responses: responses
        });
    }
}
