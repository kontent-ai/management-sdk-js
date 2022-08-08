import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';

export class AssetIdentifierQuery<TResult> {

    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ManagementQueryService,
            identifier: Identifiers.AssetIdentifier) => TResult
    ) {
    }

    /**
    * Gets using internal Id
    * @param id Internal Id of content item
    */
    byAssetId(id: string): TResult {
        return this.buildResult(this.config, this.queryService, new Identifiers.AssetIdentifier(Identifiers.AssetIdentifierEnum.InternalId, id));
    }

    /**
    * Gets query using external Id
    * @param id External Id of content item
    */
    byAssetExternalId(id: string): TResult {
        return this.buildResult(this.config, this.queryService, new Identifiers.AssetIdentifier(Identifiers.AssetIdentifierEnum.ExternalId, id));
    }
}
