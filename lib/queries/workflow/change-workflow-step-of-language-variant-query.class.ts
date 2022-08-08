

import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { BaseResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ChangeWorkflowStepOfLanguageOrVariantQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public contentItemIdentifier: Identifiers.ContentItemIdentifier,
    public languageIdentifier: Identifiers.LanguageIdentifier,
    public workflowIdentifier: Identifiers.WorkflowIdentifier
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<BaseResponses.EmptyContentManagementResponse> {
    return this.queryService.changeWorkflowStepOfLanguageVariantAsync(this.getUrl(), this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.changeWorkflowStepOfLanguageVariant(this.contentItemIdentifier, this.languageIdentifier, this.workflowIdentifier);
  }
}
