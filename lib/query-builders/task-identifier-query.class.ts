import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ContentManagementQueryService } from '../services';

export class TaskIdentifierQuery<TResult> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ContentManagementQueryService,
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
