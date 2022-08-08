import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';

export class ContentTypeCodenameAndIdIdentifierQuery<TResult> {

    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ManagementQueryService,
            identifier: Identifiers.ContentTypeIdentifier) => TResult
    ) {
    }

    /**
    * Gets query using internal Id
    * @param id Internal Id of content item
    */
    byTypeId(id: string): TResult {
        return this.buildResult(this.config, this.queryService, new Identifiers.ContentTypeIdentifier(Identifiers.ContentTypeIdentifierEnum.InternalId, id));
    }

    /**
    * Gets query using codename
    * @param codename Codename of content item
    */
    byTypeCodename(codename: string): TResult {
        return this.buildResult(this.config, this.queryService, new Identifiers.ContentTypeIdentifier(Identifiers.ContentTypeIdentifierEnum.Codename, codename));
    }
}
