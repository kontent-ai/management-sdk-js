import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../../config';
import { Identifiers, ContentTypeModels } from '../../models';
import { ContentTypeResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ModifyContentTypeQuery extends BaseQuery<ContentTypeResponses.ModifyContentTypeResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ContentManagementQueryService,
    public identifier: Identifiers.ContentTypeIdentifier,
    public data: ContentTypeModels.IModifyContentTypeData[]
  ) {
    super(config, queryService);
  }

  toObservable(): Observable<ContentTypeResponses.ModifyContentTypeResponse> {
    return this.queryService.modifyContentType(this.getUrl(), this.queryConfig, this.data);
  }

  protected getAction(): string {
    return this.apiEndpoints.modifyContentType(this.identifier);
  }
}
