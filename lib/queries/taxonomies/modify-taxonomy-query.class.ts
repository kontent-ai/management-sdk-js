import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../../config';
import { Identifiers, TaxonomyModels } from '../../models';
import { TaxonomyResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ModifyTaxonomyQuery extends BaseQuery<TaxonomyResponses.ModifyTaxonomyResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public identifier: Identifiers.TaxonomyIdentifier,
        public data: TaxonomyModels.IModifyTaxonomyData[]
    ) {
        super(config, queryService);
    }

    toObservable(): Observable<TaxonomyResponses.ModifyTaxonomyResponse> {
        return this.queryService.modifyTaxonomy(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.modifyTaxonomy(this.identifier);
    }
}
