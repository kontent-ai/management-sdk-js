

import { IManagementClientConfig } from '../../config';
import { ContentTypeSnippetModels, ContentTypeSnippetElements, contentTypeSnippetElementsBuilder } from '../../models';
import { ContentTypeSnippetResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class AddContentTypeSnippetQuery extends BaseQuery<ContentTypeSnippetResponses.ViewContentTypeSnippetResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public data: (builder: ContentTypeSnippetElements) => ContentTypeSnippetModels.IAddContentTypeSnippetData,
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<ContentTypeSnippetResponses.ViewContentTypeSnippetResponse> {
    return this.queryService.addContentTypeSnippetAsync(this.getUrl(), this.data(contentTypeSnippetElementsBuilder), this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.addContentTypeSnippet();
  }
}

