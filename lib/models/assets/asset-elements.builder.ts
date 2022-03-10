import { SharedContracts } from '../../contracts';
import { AssetModels } from './asset.models';

export class AssetElementsBuilder {
    taxonomyElement(
        element: AssetModels.IAssetElementData<SharedContracts.IReferenceObjectContract[]>
    ): AssetModels.IAssetElementValueType {
        return element;
    }
}

export const assetElementsBuilder = new AssetElementsBuilder();
