import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ContentManagementQueryService } from '../services';

export class UserIdentifierQuery<TResult> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ContentManagementQueryService,
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
