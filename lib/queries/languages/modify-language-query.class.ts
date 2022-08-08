

import { IManagementClientConfig } from '../../config';
import { Identifiers, LanguageModels } from '../../models';
import { LanguageResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ModifyLanguageQuery extends BaseQuery<LanguageResponses.ModifyLanguageResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public identifier: Identifiers.LanguageIdentifier,
    public data: LanguageModels.IModifyLanguageData[]
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<LanguageResponses.ModifyLanguageResponse> {
    return this.queryService.modifyLanguageAsync(this.getUrl(), this.queryConfig, this.data);
  }

  protected getAction(): string {
    return this.apiEndpoints.modifyLanguage(this.identifier);
  }
}
