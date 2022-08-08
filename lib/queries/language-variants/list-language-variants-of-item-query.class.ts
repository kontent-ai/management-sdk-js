

import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageVariantResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ListLanguageVariantsOfItemQuery extends BaseQuery<LanguageVariantResponses.ListLanguageVariantsOfItemResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    protected identifier: Identifiers.ContentItemIdentifier,
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<LanguageVariantResponses.ListLanguageVariantsOfItemResponse> {
    return this.queryService.listLanguageVariantsOfItemAsync(this.getUrl(), this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.listLanguageVariantsOfItem(this.identifier);
  }
}


