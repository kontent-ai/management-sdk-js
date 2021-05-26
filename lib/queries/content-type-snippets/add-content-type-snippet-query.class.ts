

import { IManagementClientConfig } from '../../config';
import { ContentTypeSnippetModels, ContentTypeSnippetElements, contentTypeSnippetElementsBuilder } from '../../models';
import { ContentTypeSnippetResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class AddContentTypeSnippetQuery extends BaseQuery<ContentTypeSnippetResponses.ViewContentTypeSnippetResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ContentManagementQueryService,
    public data: (builder: ContentTypeSnippetElements) => ContentTypeSnippetModels.IAddContentTypeSnippetData,
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<ContentTypeSnippetResponses.ViewContentTypeSnippetResponse> {
    return this.queryService.addContentTypeSnippet(this.getUrl(), this.data(contentTypeSnippetElementsBuilder), this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.addContentTypeSnippet();
  }
}

