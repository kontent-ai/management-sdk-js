import { SharedContracts } from './shared-contracts';

export namespace AssetContracts {
    export interface IAssetModelContract {
        id: string;
        file_name: string;
        title: string;
        image_width: number | null;
        image_height: number | null;
        size: number;
        type: string;
        file_reference: IAssetFileReferenceContract;
        descriptions: IAssetFileDescriptionContract[];
        external_id: string;
        last_modified: string;
        url: string;
        codename: string;
        collection?: IAssetCollectionReferenceContract;
        folder?: IAssetFolderReferenceContract;
    }

    export interface IAssetFileReferenceContract  {
        id: string;
        type: 'internal';
    }

    export interface IAssetFolderReferenceContract {
        id?: string;
        external_id?: string;
    }

    export interface IAssetFileDescriptionContract {
        language: SharedContracts.IReferenceObjectContract;
        description: string;
    }

    export interface IAssetCollectionReferenceContract {
        reference: SharedContracts.IReferenceObjectContract | null;
    }

    export interface IAssetsListingResponseContract {
        assets: IAssetModelContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }

    export interface IUploadBinaryFileResponseContract extends IAssetFileReferenceContract {
    }

    export interface IAddAssetResponseContract extends IAssetModelContract {
    }

    export interface IUpdateAssetResponseContract extends IAssetModelContract {
    }

    export interface IUpsertAssetResponseContract extends IAssetModelContract {
    }

    export interface IDeleteAssetResponseContract {
    }
}


