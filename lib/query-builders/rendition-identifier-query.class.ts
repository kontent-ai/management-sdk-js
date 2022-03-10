import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ContentManagementQueryService } from '../services';

export class RenditionIdentifierQuery<TResult> {

    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ContentManagementQueryService,
            identifier: Identifiers.RenditionIdentifier) => TResult
    ) {
    }

    /**
    * Gets using internal Id
    * @param id Internal Id of content item
    */
    byRenditionId(id: string): TResult {
        return this.buildResult(this.config, this.queryService, new Identifiers.RenditionIdentifier(Identifiers.RenditionIdentifierEnum.InternalId, id));
    }

    /**
    * Gets query using external Id
    * @param id External Id of content item
    */
    byRenditionExternalId(id: string): TResult {
        return this.buildResult(this.config, this.queryService, new Identifiers.RenditionIdentifier(Identifiers.RenditionIdentifierEnum.ExternalId, id));
    }
}
