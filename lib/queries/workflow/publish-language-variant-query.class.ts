

import { IManagementClientConfig } from '../../config';
import { Identifiers, WorkflowModels } from '../../models';
import { BaseResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class PublishLanguageVariantQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public contentItemIdentifier: Identifiers.ContentItemIdentifier,
    public languageIdentifier: Identifiers.LanguageIdentifier,
    public data?: WorkflowModels.IPublishLanguageVariantData
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<BaseResponses.EmptyContentManagementResponse> {
    return this.queryService.publishLanguageVariantAsync(this.getUrl(), this.data, this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.publishLaguageVariant(this.contentItemIdentifier, this.languageIdentifier);
  }
}
