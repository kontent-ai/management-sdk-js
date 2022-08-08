
import { IManagementClientConfig } from '../../config';
import { CollectionModels } from '../../models';
import { CollectionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class SetCollectionsQuery extends BaseQuery<CollectionResponses.SetCollectionsResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public data: CollectionModels.ISetCollectionData[]
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<CollectionResponses.SetCollectionsResponse> {
        return this.queryService.setCollectionsAsync(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.setCollections();
    }
}
