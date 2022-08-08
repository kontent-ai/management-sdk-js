

import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { ContentItemResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ViewContentItemQuery extends BaseQuery<ContentItemResponses.ViewContentItemResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public identifier: Identifiers.ContentItemIdentifier,
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<ContentItemResponses.ViewContentItemResponse> {
    return this.queryService.viewContentItemAsync(this.getUrl(), this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.viewContentItem(this.identifier);
  }
}
