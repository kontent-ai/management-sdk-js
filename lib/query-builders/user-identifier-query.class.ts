import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';

export class UserIdentifierQuery<TResult> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ManagementQueryService,
            identifier: Identifiers.UserIdentifier
        ) => TResult
    ) {}

    /**
     * Gets using email
     * @param email Email
     */
    byEmail(email: string): TResult {
        return this.buildResult(
            this.config,
            this.queryService,
            new Identifiers.UserIdentifier(Identifiers.UserIdentifierEnum.Email, email)
        );
    }

    /**
     * Gets using internal Id
     * @param id Internal Id
     */
    byId(id: string): TResult {
        return this.buildResult(
            this.config,
            this.queryService,
            new Identifiers.UserIdentifier(Identifiers.UserIdentifierEnum.Id, id)
        );
    }
}
