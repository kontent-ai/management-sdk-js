import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../../config';
import { LanguageResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListLanguagesQuery extends BaseListingQuery<LanguageResponses.ListLanguagesResponse> {
    constructor(protected config: IManagementClientConfig, protected queryService: ContentManagementQueryService) {
        super(config, queryService);
    }

    toObservable(): Observable<LanguageResponses.ListLanguagesResponse> {
        return this.queryService.listLanguages(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listLanguages();
    }
}
