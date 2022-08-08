

import { IManagementClientConfig } from '../../config';
import { Identifiers, ContentTypeModels } from '../../models';
import { ContentTypeSnippetResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ModifyContentTypeSnippetQuery extends BaseQuery<ContentTypeSnippetResponses.ModifyContentTypeSnippetResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public identifier: Identifiers.ContentTypeIdentifier,
    public data: ContentTypeModels.IModifyContentTypeData[]
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<ContentTypeSnippetResponses.ModifyContentTypeSnippetResponse> {
    return this.queryService.modifyContentTypeSnippetAsync(this.getUrl(), this.queryConfig, this.data);
  }

  protected getAction(): string {
    return this.apiEndpoints.modifyContentTypeSnippet(this.identifier);
  }
}
