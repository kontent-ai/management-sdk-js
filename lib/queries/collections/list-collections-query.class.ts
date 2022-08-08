import { IManagementClientConfig } from '../../config';
import { CollectionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ListCollectionsQuery extends BaseQuery<CollectionResponses.CollectionsListResponse> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<CollectionResponses.CollectionsListResponse> {
        return this.queryService.listCollectionsAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listCollections();
    }
}
