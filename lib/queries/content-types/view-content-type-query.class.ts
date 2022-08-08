

import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { ContentTypeResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ViewContentTypeQuery extends BaseQuery<ContentTypeResponses.ViewContentTypeResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public identifier: Identifiers.ContentTypeIdentifier,
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<ContentTypeResponses.ViewContentTypeResponse> {
    return this.queryService.viewContentTypeAsync(this.getUrl(), this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.viewContentType(this.identifier);
  }
}
