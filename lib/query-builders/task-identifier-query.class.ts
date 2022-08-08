import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';

export class TaskIdentifierQuery<TResult> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ManagementQueryService,
            identifier: Identifiers.TaskIdentifier
        ) => TResult
    ) {}

    /**
     * Query by task Id
     * @param id Task id
     */
    byTaskId(id: string): TResult {
        return this.buildResult(
            this.config,
            this.queryService,
            new Identifiers.TaskIdentifier(Identifiers.TaskIdentifierEnum.InternalId, id)
        );
    }
}
