import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageVariantResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ViewLanguageVariantQuery extends BaseQuery<LanguageVariantResponses.ViewLanguageVariantResponse> {
    private fetchPublishedVersion: boolean = false;

    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public contentItemIdentifier: Identifiers.ContentItemIdentifier,
        public languageIdentifier: Identifiers.LanguageIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<LanguageVariantResponses.ViewLanguageVariantResponse> {
        return this.queryService.viewLanguageVariantAsync(this.getUrl(), this.queryConfig);
    }

    published(): this {
        this.fetchPublishedVersion = true;
        return this;
    }

    protected getAction(): string {
        return this.apiEndpoints.viewLanguageVariant(
            this.contentItemIdentifier,
            this.languageIdentifier,
            this.fetchPublishedVersion
        );
    }
}
