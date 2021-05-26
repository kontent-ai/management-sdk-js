
import { IManagementClientConfig } from '../../config';
import { AssetFolderModels } from '../../models';
import { AssetFolderResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class AddAssetFoldersQuery extends BaseQuery<AssetFolderResponses.AddAssetFoldersResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public data: AssetFolderModels.IAddAssetFoldersData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<AssetFolderResponses.AddAssetFoldersResponse> {
        return this.queryService.addAssetFolders(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.addAssetFolders();
    }
}
