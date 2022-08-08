import { IManagementClientConfig } from '../config';
import { ManagementQueryService } from '../services';

export class ActionQuery<TResult> {

    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ManagementQueryService,
            action: string) => TResult
    ) {
    }

    /**
     * Sets action to use for request
     */
    withAction(action: string): TResult {
        return this.buildResult(this.config, this.queryService, action);
    }
}
