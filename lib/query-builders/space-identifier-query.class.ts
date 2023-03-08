import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';

export class SpaceIdentifierQuery<TResult> {

    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ManagementQueryService,
            identifier: Identifiers.SpaceIdentifier) => TResult
    ) {
    }

    /**
    * Gets using internal Id
    * @param id Internal Id of space
    */
    bySpaceId(id: string): TResult {
        return this.buildResult(this.config, this.queryService, new Identifiers.SpaceIdentifier(Identifiers.SpaceIdentifierEnum.InternalId, id));
    }

    /**
    * Gets query using external Id
    * @param id External Id of space
    */
    bySpaceExternalId(id: string): TResult {
        return this.buildResult(this.config, this.queryService, new Identifiers.SpaceIdentifier(Identifiers.SpaceIdentifierEnum.ExternalId, id));
    }

    /**
    * Gets query using codename
    * @param codename Codename of space
    */
    bySpaceCodename(codename: string): TResult {
        return this.buildResult(this.config, this.queryService, new Identifiers.SpaceIdentifier(Identifiers.SpaceIdentifierEnum.Codename, codename));
    }
}
