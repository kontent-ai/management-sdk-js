import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';

export class RoleIdentifierQuery<TResult> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ManagementQueryService,
            identifier: Identifiers.RoleIdentifier
        ) => TResult
    ) {}

    /**
     * Id
     * @param id Internal Id
     */
    byId(id: string): TResult {
        return this.buildResult(
            this.config,
            this.queryService,
            new Identifiers.RoleIdentifier(Identifiers.RoleIdentifierEnum.Id, id)
        );
    }

    /**
     * Codename
     * @param codename Codename
     */
    byCodename(id: string): TResult {
        return this.buildResult(
            this.config,
            this.queryService,
            new Identifiers.RoleIdentifier(Identifiers.RoleIdentifierEnum.Codename, id)
        );
    }
}
