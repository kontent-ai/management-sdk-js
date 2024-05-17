import { IResponse } from '@kontent-ai/core-sdk';

import { AssetContracts } from '../contracts';
import { AssetModels } from '../models';
import { AssetResponses } from '../responses';
import { BaseMapper } from './base-mapper';

export class AssetsMapper extends BaseMapper {
    mapListingAssetsResponse(
        response: IResponse<AssetContracts.IAssetsListingResponseContract>
    ): AssetResponses.AssetsListResponse {
        const pagination = super.mapPagination(response.data.pagination);
        const items = response.data.assets.map((m) => this.mapAsset(m));

        return new AssetResponses.AssetsListResponse(super.mapResponseDebug(response), response.data, {
            pagination: pagination,
            items: items
        });
    }

    mapViewAssetResponse(response: IResponse<AssetContracts.IAssetModelContract>): AssetResponses.ViewAssetResponse {
        return new AssetResponses.ViewAssetResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapAsset(response.data)
        );
    }

    mapUploadBinaryFileResponse(
        response: IResponse<AssetContracts.IUploadBinaryFileResponseContract>
    ): AssetResponses.UploadBinaryFileResponse {
        return new AssetResponses.UploadBinaryFileResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapAssetReference(response.data)
        );
    }

    mapAddAssetResponse(
        response: IResponse<AssetContracts.IAddAssetResponseContract>
    ): AssetResponses.AddAssetResponse {
        return new AssetResponses.AddAssetResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapAsset(response.data)
        );
    }

    mapUpdateAssetResponse(
        response: IResponse<AssetContracts.IUpdateAssetResponseContract>
    ): AssetResponses.UpdateAssetResponse {
        return new AssetResponses.UpdateAssetResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapAsset(response.data)
        );
    }

    mapUpsertAssetResponse(
        response: IResponse<AssetContracts.IUpsertAssetResponseContract>
    ): AssetResponses.UpsertAssertResponse {
        return new AssetResponses.UpsertAssertResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapAsset(response.data)
        );
    }

    mapAssetReference(rawFileReference: AssetContracts.IAssetFileReferenceContract): AssetModels.AssetFileReference {
        return new AssetModels.AssetFileReference({
            id: rawFileReference.id,
            type: rawFileReference.type
        });
    }

    mapAsset(rawAsset: AssetContracts.IAssetModelContract): AssetModels.Asset {
        return new AssetModels.Asset({
            descriptions: rawAsset.descriptions.map(
                (m) =>
                    new AssetModels.AssetFileDescription({
                        description: m.description,
                        language: super.mapReference(m.language)
                    })
            ),
            externalId: rawAsset.external_id,
            fileName: rawAsset.file_name,
            fileReference: this.mapAssetReference(rawAsset.file_reference),
            id: rawAsset.id,
            url: rawAsset.url,
            imageHeight: rawAsset.image_height,
            imageWidth: rawAsset.image_width,
            lastModified: new Date(rawAsset.last_modified),
            size: rawAsset.size,
            title: rawAsset.title,
            type: rawAsset.type,
            folder: rawAsset.folder,
            codename: rawAsset.codename,
            collection: rawAsset.collection,
            elements: rawAsset.elements,
            _raw: rawAsset
        });
    }
}

export const assetsMapper = new AssetsMapper();
