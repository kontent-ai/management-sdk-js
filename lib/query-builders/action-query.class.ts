import { IManagementClientConfig } from '../config';
import { ContentManagementQueryService } from '../services';

export class ActionQuery<TResult> {

    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ContentManagementQueryService,
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
