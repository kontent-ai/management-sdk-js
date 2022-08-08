

import { IManagementClientConfig } from '../../config';
import { TaxonomyModels } from '../../models';
import { TaxonomyResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class AddTaxonomyQuery extends BaseQuery<TaxonomyResponses.AddTaxonomyResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public data: TaxonomyModels.IAddTaxonomyRequestModel
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<TaxonomyResponses.AddTaxonomyResponse> {
    return this.queryService.addTaxonomyAsync(this.getUrl(), this.data, this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.addTaxonomy();
  }
}
