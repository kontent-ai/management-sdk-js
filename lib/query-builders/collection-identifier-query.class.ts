import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ContentManagementQueryService } from '../services';

export class CollectionIdentifierQuery<TResult> {

    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ContentManagementQueryService,
            identifier: Identifiers.CollectionIdentifier) => TResult
    ) {
    }

    /**
    * Gets using internal Id
    * @param id Internal Id of collection
    */
    byCollectionId(id: string): TResult {
        return this.buildResult(this.config, this.queryService, new Identifiers.CollectionIdentifier(Identifiers.CollectionIdentifierEnum.InternalId, id));
    }

    /**
    * Gets query using external Id
    * @param id External Id of collection
    */
    byCollectionExternalId(id: string): TResult {
        return this.buildResult(this.config, this.queryService, new Identifiers.CollectionIdentifier(Identifiers.CollectionIdentifierEnum.ExternalId, id));
    }

    /**
    * Gets query using codename
    * @param codename Codename of collection
    */
    byCollectionCodename(codename: string): TResult {
        return this.buildResult(this.config, this.queryService, new Identifiers.CollectionIdentifier(Identifiers.CollectionIdentifierEnum.Codename, codename));
    }
}
