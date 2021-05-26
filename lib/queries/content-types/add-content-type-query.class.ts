

import { IManagementClientConfig } from '../../config';
import { ContentTypeModels, contentTypeElementsBuilder, ContentTypeElementsBuilder } from '../../models';
import { ContentTypeResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class AddContentTypeQuery extends BaseQuery<ContentTypeResponses.AddContentTypeResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ContentManagementQueryService,
    public data: (builder: ContentTypeElementsBuilder) => ContentTypeModels.IAddContentTypeData,
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<ContentTypeResponses.AddContentTypeResponse> {
    return this.queryService.addContentType(this.getUrl(), this.data(contentTypeElementsBuilder), this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.addContentType();
  }
}

