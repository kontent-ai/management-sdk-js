import { AssetFolderContracts } from '../../contracts';
import { SharedModels } from '../shared/shared-models';

export namespace AssetFolderModels {
    export class AssetFolder implements SharedModels.IBaseModel<AssetFolderContracts.IAssetFolderContract> {
        public id: string;
        public name: string;
        public externalId?: string;
        public folders: AssetFolder[];
        public _raw!: AssetFolderContracts.IAssetFolderContract;

        constructor(data: {
            id: string;
            name: string;
            externalId?: string;
            folders: AssetFolder[];
            _raw: AssetFolderContracts.IAssetFolderContract;
        }) {
            this.id = data.id;
            this.name = data.name;
            this.externalId = data.externalId;
            this.folders = data.folders;
        }
    }

    export interface IAddOrModifyAssetFolderData {
        name: string;
        folders: IAddOrModifyAssetFolderData[];
        external_id?: string;
    }

    export interface IAddAssetFoldersData {
        folders: IAddOrModifyAssetFolderData[];
    }

    export interface IModifyAssetFoldersData {
        op: 'addInto' | 'remove' | 'rename';
        value: IAddOrModifyAssetFolderData;
        after?: {
            external_id?: string;
            id?: string;
        };
        before?: {
            external_id?: string;
            id?: string;
        };
        reference?: {
            external_id?: string;
            id?: string;
        };
    }
}
