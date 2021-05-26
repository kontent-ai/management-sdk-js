

import { IManagementClientConfig } from '../../config';
import { Identifiers, ContentTypeModels } from '../../models';
import { ContentTypeSnippetResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ModifyContentTypeSnippetQuery extends BaseQuery<ContentTypeSnippetResponses.ModifyContentTypeSnippetResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ContentManagementQueryService,
    public identifier: Identifiers.ContentTypeIdentifier,
    public data: ContentTypeModels.IModifyContentTypeData[]
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<ContentTypeSnippetResponses.ModifyContentTypeSnippetResponse> {
    return this.queryService.modifyContentTypeSnippet(this.getUrl(), this.queryConfig, this.data);
  }

  protected getAction(): string {
    return this.apiEndpoints.modifyContentTypeSnippet(this.identifier);
  }
}
