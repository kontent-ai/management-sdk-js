import { IBaseResponse } from '@kentico/kontent-core';

import { AssetFolderContracts } from '../contracts';
import { AssetFolderModels } from '../models';
import { AssetFolderResponses } from '../responses';
import { BaseMapper } from './base-mapper';

export class AssetFolderMapper extends BaseMapper {
    mapListAssetFoldersResponse(
        response: IBaseResponse<AssetFolderContracts.IListAssetFoldersResponseContract>
    ): AssetFolderResponses.AssetFoldersListResponse {
        const items = response.data.folders.map(m => this.mapAssetFolder(m));

        return new AssetFolderResponses.AssetFoldersListResponse(super.mapResponseDebug(response), response.data, {
            last_modified: new Date(response.data.last_modified),
            items: items
        });
    }

    mapAddAssetFoldersResponse(
        response: IBaseResponse<AssetFolderContracts.IAddAssetFoldersResponseContract>
    ): AssetFolderResponses.AddAssetFoldersResponse {
        const items = response.data.folders.map(m => this.mapAssetFolder(m));

        return new AssetFolderResponses.AddAssetFoldersResponse(super.mapResponseDebug(response), response.data, {
            last_modified: new Date(response.data.last_modified),
            items: items
        });
    }

    mapModifyAssetFoldersResponse(
        response: IBaseResponse<AssetFolderContracts.IModifyAssetFoldersDataResponseContract>
    ): AssetFolderResponses.ModifyAssetFoldersResponse {
        const items = response.data.folders.map(m => this.mapAssetFolder(m));

        return new AssetFolderResponses.ModifyAssetFoldersResponse(super.mapResponseDebug(response), response.data, {
            last_modified: new Date(response.data.last_modified),
            items: items
        });
    }

    private mapAssetFolder(rawFolder: AssetFolderContracts.IAssetFolderContract): AssetFolderModels.AssetFolder {
        return new AssetFolderModels.AssetFolder({
            externalId: rawFolder.external_id,
            id: rawFolder.id,
            name: rawFolder.name,
            folders: rawFolder.folders.map(m => this.mapAssetFolder(m))
        });
    }
}

export const assetFolderMapper = new AssetFolderMapper();
