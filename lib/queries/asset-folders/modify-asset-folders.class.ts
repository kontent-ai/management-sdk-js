import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../../config';
import { AssetFolderModels } from '../../models';
import { AssetFolderResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ModifyAssetFoldersQuery extends BaseQuery<AssetFolderResponses.ModifyAssetFoldersResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public data: AssetFolderModels.IModifyAssetFoldersData[]
    ) {
        super(config, queryService);
    }

    toObservable(): Observable<AssetFolderResponses.ModifyAssetFoldersResponse> {
        return this.queryService.modifyAssetFolders(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.modifyAssetFolders();
    }
}
