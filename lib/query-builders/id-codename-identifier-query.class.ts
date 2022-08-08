import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';

export class IdCodenameIdentifierQuery<TResult> {

    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ManagementQueryService,
            identifier: Identifiers.ContentItemIdentifier) => TResult
    ) {
    }

    /**
    * Gets using internal Id
    * @param id Internal Id
    */
    byItemId(id: string): TResult {
        return this.buildResult(this.config, this.queryService, new Identifiers.ContentItemIdentifier(Identifiers.ContentItemIdentifierEnum.InternalId, id));
    }

    /**
    * Gets query using codename
    * @param codename Codename
    */
    byItemCodename(codename: string): TResult {
        return this.buildResult(this.config, this.queryService, new Identifiers.ContentItemIdentifier(Identifiers.ContentItemIdentifierEnum.Codename, codename));
    }
}
