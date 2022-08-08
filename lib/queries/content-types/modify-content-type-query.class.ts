

import { IManagementClientConfig } from '../../config';
import { Identifiers, ContentTypeModels } from '../../models';
import { ContentTypeResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ModifyContentTypeQuery extends BaseQuery<ContentTypeResponses.ModifyContentTypeResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public identifier: Identifiers.ContentTypeIdentifier,
    public data: ContentTypeModels.IModifyContentTypeData[]
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<ContentTypeResponses.ModifyContentTypeResponse> {
    return this.queryService.modifyContentTypeAsync(this.getUrl(), this.queryConfig, this.data);
  }

  protected getAction(): string {
    return this.apiEndpoints.modifyContentType(this.identifier);
  }
}
