import { IManagementClientConfig } from '../../config';
import { CollectionResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ListCollectionsQuery extends BaseQuery<CollectionResponses.CollectionsListResponse> {
    constructor(protected config: IManagementClientConfig, protected queryService: ContentManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<CollectionResponses.CollectionsListResponse> {
        return this.queryService.listCollections(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listCollections();
    }
}
