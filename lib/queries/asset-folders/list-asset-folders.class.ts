

import { IManagementClientConfig } from '../../config';
import { AssetFolderResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ListAssetFoldersQuery extends BaseQuery<AssetFolderResponses.AssetFoldersListResponse> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<AssetFolderResponses.AssetFoldersListResponse> {
        return this.queryService.listAssetFoldersAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listAssetFolders();
    }
}
