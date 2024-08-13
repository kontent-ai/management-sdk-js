import { AssetFolderContracts, SharedContracts } from '../../contracts';
import { SharedModels } from '../shared/shared-models';

export namespace AssetFolderModels {
    export class AssetFolder implements SharedModels.IBaseModel<AssetFolderContracts.IAssetFolderContract> {
        public id: string;
        public name: string;
        public externalId?: string;
        public folders: AssetFolder[];
        public codename: string;
        public _raw!: AssetFolderContracts.IAssetFolderContract;

        constructor(data: {
            id: string;
            name: string;
            externalId?: string;
            folders: AssetFolder[];
            codename: string;
            _raw: AssetFolderContracts.IAssetFolderContract;
        }) {
            this.id = data.id;
            this.name = data.name;
            this.externalId = data.externalId;
            this.folders = data.folders;
            this.codename = data.codename;
            this._raw = data._raw;
        }
    }

    export interface IAssetFolderValue {
        name: string;
        folders: IAssetFolderValue[];
        external_id?: string;
        codename?: string;
    }

    export interface IAddAssetFoldersData {
        folders: IAssetFolderValue[];
    }

    export type IModifyAssetFolderData = AddIntoOperation | RemoveOperation | RenameOperation;

    export type AddIntoOperation = {
        op: 'addInto';
        reference?: SharedContracts.IReferenceObjectContract;
        value: IAssetFolderValue;
        before?: SharedContracts.IReferenceObjectContract;
        after?: SharedContracts.IReferenceObjectContract;
    };

    export type RemoveOperation = {
        op: 'remove';
        reference: SharedContracts.IReferenceObjectContract;
    };

    export type RenameOperation = {
        op: 'rename';
        reference: SharedContracts.IReferenceObjectContract;
        value: string;
    };
}
