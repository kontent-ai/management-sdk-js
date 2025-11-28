import { IResponse } from '@kontent-ai/core-sdk';

import { AssetFolderContracts } from '../contracts';
import { AssetFolderModels } from '../models';
import { AssetFolderResponses } from '../responses';
import { BaseMapper } from './base-mapper';

export class AssetFolderMapper extends BaseMapper {
    mapListAssetFoldersResponse(
        response: IResponse<AssetFolderContracts.IListAssetFoldersResponseContract>
    ): AssetFolderResponses.AssetFoldersListResponse {
        const items = response.data.folders.map((m) => this.mapAssetFolder(m));

        return new AssetFolderResponses.AssetFoldersListResponse(super.mapResponseDebug(response), response.data, {
            last_modified: new Date(response.data.last_modified),
            items: items
        });
    }

    mapAddAssetFoldersResponse(
        response: IResponse<AssetFolderContracts.IAddAssetFoldersResponseContract>
    ): AssetFolderResponses.AddAssetFoldersResponse {
        const items = response.data.folders.map((m) => this.mapAssetFolder(m));

        return new AssetFolderResponses.AddAssetFoldersResponse(super.mapResponseDebug(response), response.data, {
            last_modified: new Date(response.data.last_modified),
            items: items
        });
    }

    mapModifyAssetFoldersResponse(
        response: IResponse<AssetFolderContracts.IModifyAssetFoldersDataResponseContract>
    ): AssetFolderResponses.ModifyAssetFoldersResponse {
        const items = response.data.folders.map((m) => this.mapAssetFolder(m));

        return new AssetFolderResponses.ModifyAssetFoldersResponse(super.mapResponseDebug(response), response.data, {
            last_modified: new Date(response.data.last_modified),
            items: items
        });
    }

    mapAssetFolder(rawFolder: AssetFolderContracts.IAssetFolderContract): AssetFolderModels.AssetFolder {
        return new AssetFolderModels.AssetFolder({
            externalId: rawFolder.external_id,
            id: rawFolder.id,
            name: rawFolder.name,
            folders: rawFolder.folders?.map((m) => this.mapAssetFolder(m)) ?? [],
            codename: rawFolder.codename,
            _raw: rawFolder
        });
    }
}

export const assetFolderMapper = new AssetFolderMapper();
