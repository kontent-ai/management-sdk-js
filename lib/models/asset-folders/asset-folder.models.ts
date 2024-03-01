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
            this._raw = data._raw;
        }
    }

    export interface IAssetFolderValue {
        name: string;
        folders: IAssetFolderValue[];
        external_id?: string;
    }

    export interface IAddAssetFoldersData {
        folders: IAssetFolderValue[];
    }

    export type IModifyAssetFolderData = AddIntoOperation | RemoveOperation | RenameOperation;

    export type AddIntoOperation = {
        op: 'addInto';
        reference?: {
            id?: string;
            external_id?: string;
        };
        value: IAssetFolderValue;
        before?: {
            id?: string;
            external_id?: string;
        };
        after?: {
            id?: string;
            external_id?: string;
        };
    };

    export type RemoveOperation = {
        op: 'remove';
        reference: SharedModels.ReferenceObject;
    };

    export type RenameOperation = {
        op: 'rename';
        reference: SharedModels.ReferenceObject;
        value: string;
    };
}
