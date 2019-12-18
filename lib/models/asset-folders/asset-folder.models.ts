export namespace AssetFolderModels {
    export class AssetFolder {
        public id: string;
        public name: string;
        public externalId?: string;
        public folders: AssetFolder[];

        constructor(data: { id: string; name: string; externalId?: string; folders: AssetFolder[] }) {
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
