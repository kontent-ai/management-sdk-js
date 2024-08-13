export namespace AssetFolderContracts {
    export interface IAssetFolderContract {
        id: string;
        name: string;
        external_id?: string;
        folders: IAssetFolderContract[];
        codename: string;
    }

    export interface IListAssetFoldersResponseContract {
        folders: IAssetFolderContract[];
        last_modified: string;
    }

    export interface IAddAssetFoldersResponseContract extends IListAssetFoldersResponseContract {}

    export interface IModifyAssetFoldersDataResponseContract extends IListAssetFoldersResponseContract {}
}
