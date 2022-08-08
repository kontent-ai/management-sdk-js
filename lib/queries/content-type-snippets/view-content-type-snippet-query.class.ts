

import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { ContentTypeSnippetResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ViewContentTypeSnippetQuery extends BaseQuery<ContentTypeSnippetResponses.ViewContentTypeSnippetResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public identifier: Identifiers.ContentTypeIdentifier,
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<ContentTypeSnippetResponses.ViewContentTypeSnippetResponse> {
    return this.queryService.viewContentTypeSnippetAsync(this.getUrl(), this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.viewContentTypeSnippet(this.identifier);
  }
}

