

import { IManagementClientConfig } from '../../config';
import { ContentItemContracts } from '../../contracts';
import { ContentItemResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class AddContentItemQuery extends BaseQuery<ContentItemResponses.AddContentItemResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public data: ContentItemContracts.IAddContentItemPostContract
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<ContentItemResponses.AddContentItemResponse> {
    return this.queryService.addContentItemAsync(this.getUrl(), this.data, this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.addContentItem();
  }
}

export class AddContentItemQueryInit {
  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
  ) {
  }

  withData(item: ContentItemContracts.IAddContentItemPostContract): AddContentItemQuery {
    return new AddContentItemQuery(this.config, this.queryService, item);
  }
}
