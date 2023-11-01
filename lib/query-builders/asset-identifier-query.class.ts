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
            identifier: Identifiers.AssetIdentifier
        ) => TResult
    ) {}

    /**
     * Gets asset using internal Id
     * @param id Internal Id of the asset
     */
    byAssetId(id: string): TResult {
        return this.buildResult(
            this.config,
            this.queryService,
            new Identifiers.AssetIdentifier(Identifiers.AssetIdentifierEnum.InternalId, id)
        );
    }

    /**
     * Gets asset using external Id
     * @param id External Id of the asset
     */
    byAssetExternalId(id: string): TResult {
        return this.buildResult(
            this.config,
            this.queryService,
            new Identifiers.AssetIdentifier(Identifiers.AssetIdentifierEnum.ExternalId, id)
        );
    }

    /**
     * Gets asset using codename
     * @param id Codename of the asset
     */
    byAssetCodename(id: string): TResult {
        return this.buildResult(
            this.config,
            this.queryService,
            new Identifiers.AssetIdentifier(Identifiers.AssetIdentifierEnum.Codename, id)
        );
    }
}
