

import { IManagementClientConfig } from '../../config';
import { TaxonomyResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
import { Identifiers } from '../../models';

export class GetTaxonomyQuery extends BaseQuery<TaxonomyResponses.GetTaxonomyResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public identifier: Identifiers.TaxonomyIdentifier
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<TaxonomyResponses.GetTaxonomyResponse> {
    return this.queryService.getTaxonomyAsync(this.getUrl(), this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.getTaxonomy(this.identifier);
  }
}
