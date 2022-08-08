

import { IManagementClientConfig } from '../../config';
import { LanguageModels } from '../../models';
import { LanguageResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class AddLanguageQuery extends BaseQuery<LanguageResponses.AddLanguageResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public data: LanguageModels.IAddLanguageData
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<LanguageResponses.AddLanguageResponse> {
    return this.queryService.addLanguageAsync(this.getUrl(), this.queryConfig, this.data);
  }

  protected getAction(): string {
    return this.apiEndpoints.addLanguage();
  }
}
