import { SharedModels } from '../shared/shared-models';
import { AssetRenditionContracts } from '../../contracts';

export namespace AssetRenditionModels {
    export interface IAssetRenditionTransformation {
        mode: 'rect';
        fit: 'clip';
        customWidth?: number;
        customHeight?: number;
        x: number;
        y: number;
        width: number;
        height: number;
    }

    export class AssetRendition implements SharedModels.IBaseModel<AssetRenditionContracts.IAssetRenditionContract> {
        public renditionId!: string;
        public assetId!: string;
        public externalId!: string;
        public lastModified!: Date;
        public transformation!: IAssetRenditionTransformation;
        public _raw!: AssetRenditionContracts.IAssetRenditionContract;

        constructor(data: {
            renditionId: string;
            assetId: string;
            externalId: string;
            lastModified: Date;
            transformation: IAssetRenditionTransformation;
            _raw: AssetRenditionContracts.IAssetRenditionContract;
        }) {
            Object.assign(this, data);
        }
    }

    export interface IAddAssetRenditionData {
        external_id?: string;
        transformation: AssetRenditionContracts.IAssetRenditionTransformationContract;
    }

    export interface IModifyAssetRenditionData {
        transformation: AssetRenditionContracts.IAssetRenditionTransformationContract;
    }
}
