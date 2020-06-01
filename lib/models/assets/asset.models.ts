import { SharedModels } from '../shared/shared-models';
import { SharedContracts, AssetContracts } from '../../contracts';

export namespace AssetModels {

    export class Asset implements SharedModels.IBaseModel<AssetContracts.IAssetModelContract> {
        public id!: string;
        public fileName!: string;
        public title!: string | null;
        public imageWidth!: number | null;
        public imageHeight!: number | null;
        public size!: number;
        public type!: string;
        public fileReference!: AssetFileReference;
        public descriptions!: AssetFileDescription[];
        public externalId?: string;
        public lastModified!: Date;
        public url!: string;
        public folder?: IAssetFolderReference;
        public _raw!: AssetContracts.IAssetModelContract;

        constructor(
            data: {
                id: string;
                fileName: string;
                title: string | null;
                imageWidth: number | null;
                imageHeight: number | null;
                size: number;
                type: string;
                fileReference: AssetFileReference;
                descriptions: AssetFileDescription[];
                externalId?: string;
                lastModified: Date;
                url: string;
                folder?: IAssetFolderReference
                _raw: AssetContracts.IAssetModelContract
            }
        ) {
            Object.assign(this, data);
        }
    }

    export interface IAssetFolderReference {
        id?: string;
        external_id?: string;
    }

    export interface IAssetFileReference {
        id: string;
        type: 'internal';
    }

    export class AssetFileReference implements IAssetFileReference {

        public id: string;
        public type: 'internal';

        constructor(
            data: {
                id: string;
                type: 'internal'
            }
        ) {
            this.id = data.id;
            this.type = data.type;
        }
    }

    export interface IAssetFileDescription {
        language: SharedContracts.IReferenceObjectContract;
        description: string;
    }

    export class AssetFileDescription {
        public language: SharedModels.ReferenceObject;
        public description: string | null;

        constructor(
            data: {
                language: SharedModels.ReferenceObject,
                description: string | null
            }
        ) {
            this.language = data.language;
            this.description = data.description;
        }
    }

    export interface IUploadBinaryFileRequestData {
        binaryData: any;
        contentType: string;
        contentLength?: number;
        filename: string;
    }

    export interface IAddAssetRequestData {
        file_reference: IAssetFileReference;
        title?: string;
        external_id?: string;
        descriptions: IAssetFileDescription[];
        folder?: IAssetFolderReference;
    }

    export interface IUpsertAssetRequestData {
        descriptions: IAssetFileDescription[];
        title?: string;
        file_reference?: IAssetFileReference;
        folder?: IAssetFolderReference;
    }
}
