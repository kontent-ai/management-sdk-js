
import { IManagementClientConfig } from '../../config';
import { CollectionModels } from '../../models';
import { CollectionResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class SetCollectionsQuery extends BaseQuery<CollectionResponses.SetCollectionsResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public data: CollectionModels.ISetCollectionData[]
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<CollectionResponses.SetCollectionsResponse> {
        return this.queryService.setCollections(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.setCollections();
    }
}
