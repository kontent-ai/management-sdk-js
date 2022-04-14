import { IManagementClientConfig } from '../../config';
import { Identifiers, WorkflowModels } from '../../models';
import { BaseResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ChangeWorkflowOfLanguageOrVariantQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public contentItemIdentifier: Identifiers.ContentItemIdentifier,
        public languageIdentifier: Identifiers.LanguageIdentifier,
        public data: WorkflowModels.IChangeWorkflowOfLanguageVariantData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<BaseResponses.EmptyContentManagementResponse> {
        return this.queryService.changeWorkflowOfLanguageVariant(this.getUrl(), this.data, this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.changeWorkflowOfLanguageVariant(this.contentItemIdentifier, this.languageIdentifier);
    }
}
