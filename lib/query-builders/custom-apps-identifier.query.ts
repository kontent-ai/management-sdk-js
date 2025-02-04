import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';

export class CustomAppsIdentifierQuery<TResult> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ManagementQueryService,
            identifier: Identifiers.CustomAppIdentifier
        ) => TResult
    ) {}

    /**
     * Gets using internal Id
     * @param id Internal Id of custom app
     */
    byCustomAppId(id: string): TResult {
        return this.buildResult(
            this.config,
            this.queryService,
            new Identifiers.CustomAppIdentifier(Identifiers.CustomAppIdentifierEnum.InternalId, id)
        );
    }

    /**
     * Gets query using codename
     * @param codename Codename of custom app
     */
    byCustomAppCodename(codename: string): TResult {
        return this.buildResult(
            this.config,
            this.queryService,
            new Identifiers.CustomAppIdentifier(Identifiers.CustomAppIdentifierEnum.Codename, codename)
        );
    }
}
