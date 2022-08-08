

import { IManagementClientConfig } from '../../config';
import { LanguageResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListLanguagesQuery extends BaseListingQuery<
    LanguageResponses.ListLanguagesResponse,
    LanguageResponses.ListAllLanguagesResponse
> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<LanguageResponses.ListLanguagesResponse> {
        return this.queryService.listLanguagesAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listLanguages();
    }

    protected allResponseFactory(
        items: any[],
        responses: LanguageResponses.ListLanguagesResponse[]
    ): LanguageResponses.ListAllLanguagesResponse {
        return new LanguageResponses.ListAllLanguagesResponse({
            items: items,
            responses: responses
        });
    }
}
