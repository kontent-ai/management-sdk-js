

import { IManagementClientConfig } from '../../config';
import { AssetFolderResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ListAssetFoldersQuery extends BaseQuery<AssetFolderResponses.AssetFoldersListResponse> {
    constructor(protected config: IManagementClientConfig, protected queryService: ContentManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<AssetFolderResponses.AssetFoldersListResponse> {
        return this.queryService.listAssetFolders(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listAssetFolders();
    }
}
