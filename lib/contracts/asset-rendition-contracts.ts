import { SharedContracts } from "./shared-contracts";

export namespace AssetRenditionContracts {

    export interface IAssetRenditionContract {
        rendition_id: string;
        asset_id: string;
        external_id: string;
        last_modified: string;
        transformation: IAssetRenditionTransformationContract;
    }

    export interface IAssetRenditionTransformationContract {
        mode: 'rect',
        fit: 'clip',
        custom_width?: number,
        custom_height?: number,
        x: number;
        y: number;
        width: number;
        height: number;
    }

    export interface IListRenditionResponseContract {
        asset_renditions: IAssetRenditionContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }

    export interface IAddAssetRenditionResponseContract extends IAssetRenditionContract {
    }

    export interface IModifyAssetRenditionResponseContract extends IAssetRenditionContract {
    }

    export interface IViewRenditionResponseContract extends IAssetRenditionContract {
    }

}
