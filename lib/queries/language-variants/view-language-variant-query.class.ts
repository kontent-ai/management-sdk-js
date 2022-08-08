

import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageVariantResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ViewLanguageVariantQuery extends BaseQuery<LanguageVariantResponses.ViewLanguageVariantResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public contentItemIdentifier: Identifiers.ContentItemIdentifier,
    public languageIdentifier: Identifiers.LanguageIdentifier,
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<LanguageVariantResponses.ViewLanguageVariantResponse> {
    return this.queryService.viewLanguageVariantAsync(this.getUrl(), this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.viewOrUpsertLanguageVariant(this.contentItemIdentifier, this.languageIdentifier);
  }
}


