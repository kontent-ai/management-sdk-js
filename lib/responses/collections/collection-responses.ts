import { CollectionContracts } from '../../contracts';
import { CollectionModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace CollectionResponses {
    export class CollectionsListResponse extends BaseResponses.BaseContentManagementResponse<
        CollectionContracts.ICollectionListResponseContract,
        {
            collections: CollectionModels.Collection[];
            lastModified?: Date;
        }
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: CollectionContracts.ICollectionListResponseContract,
            data: {
                collections: CollectionModels.Collection[];
                lastModified?: Date;
            }
        ) {
            super(debug, rawData, data);
        }
    }
}
