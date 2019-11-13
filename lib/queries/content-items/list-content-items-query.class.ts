import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../../config';
import { ContentItemResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListContentItemsQuery extends BaseListingQuery<ContentItemResponses.ContentItemsResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ContentManagementQueryService
  ) {
    super(config, queryService);
  }

  toObservable(): Observable<ContentItemResponses.ContentItemsResponse> {
    return this.queryService.listContentItems(this.getUrl(), this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.items();
  }
}
