

import { IManagementClientConfig } from '../../config';
import { Identifiers, TaxonomyModels } from '../../models';
import { TaxonomyResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ModifyTaxonomyQuery extends BaseQuery<TaxonomyResponses.ModifyTaxonomyResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public identifier: Identifiers.TaxonomyIdentifier,
        public data: TaxonomyModels.IModifyTaxonomyData[]
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<TaxonomyResponses.ModifyTaxonomyResponse> {
        return this.queryService.modifyTaxonomyAsync(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.modifyTaxonomy(this.identifier);
    }
}
