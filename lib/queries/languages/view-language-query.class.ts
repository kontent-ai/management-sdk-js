

import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ViewLanguageQuery extends BaseQuery<LanguageResponses.ViewLanguageResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public identifier: Identifiers.LanguageIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<LanguageResponses.ViewLanguageResponse> {
        return this.queryService.viewLanguageAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.viewLanguage(this.identifier);
    }
}
