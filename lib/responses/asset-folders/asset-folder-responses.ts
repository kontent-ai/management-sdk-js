import { AssetFolderContracts } from '../../contracts';
import { AssetFolderModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace AssetFolderResponses {

    export class AssetFoldersListResponse extends BaseResponses.BaseContentManagementResponse<AssetFolderContracts.IListAssetFoldersResponseContract, {
        items: AssetFolderModels.AssetFolder[],
        last_modified: Date
    }>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: AssetFolderContracts.IListAssetFoldersResponseContract,
            data: {
                items: AssetFolderModels.AssetFolder[],
                last_modified: Date
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class AddAssetFoldersResponse extends BaseResponses.BaseContentManagementResponse<AssetFolderContracts.IAddAssetFoldersResponseContract, {
        items: AssetFolderModels.AssetFolder[],
        last_modified: Date
    }>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: AssetFolderContracts.IListAssetFoldersResponseContract,
            data: {
                items: AssetFolderModels.AssetFolder[],
                last_modified: Date
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class ModifyAssetFoldersResponse extends BaseResponses.BaseContentManagementResponse<AssetFolderContracts.IModifyAssetFoldersDataResponseContract, {
        items: AssetFolderModels.AssetFolder[],
        last_modified: Date
    }>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: AssetFolderContracts.IListAssetFoldersResponseContract,
            data: {
                items: AssetFolderModels.AssetFolder[],
                last_modified: Date
            }
        ) {
            super(debug, rawData, data);
        }
    }
}
