

import { IManagementClientConfig } from '../../config';
import { ContentItemContracts } from '../../contracts';
import { Identifiers } from '../../models';
import { ContentItemResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class UpdateContentItemQuery extends BaseQuery<ContentItemResponses.UpdateContentItemResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public data: ContentItemContracts.IUpdateContentItemPostContract,
    public identifier: Identifiers.ContentItemIdentifier,
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<ContentItemResponses.UpdateContentItemResponse> {
    return this.queryService.updateContentItemAsync(this.getUrl(), this.data, this.queryConfig);
  }

  protected getAction(): string {
      return this.apiEndpoints.updateContentItem(this.identifier);
  }
}
