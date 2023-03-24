import { Identifiers } from '../models/identifiers';
import { IManagementClientConfig } from '../config';
import { ManagementQueryService } from '../services';

export class EnvironmentIdentifierQuery<TResult> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ManagementQueryService,
            itentifier: Identifiers.EnvironmentIdentifier
        ) => TResult
    ) {}

    /**
     * For given environment by id
     * @param environmentId EnvironmentId
     */
    environmentId(environmentId: string): TResult {
        return this.buildResult(
            this.config,
            this.queryService,
            new Identifiers.EnvironmentIdentifier(Identifiers.EnvironmentIdentifierEnum.Id, environmentId)
        );
    }
}
