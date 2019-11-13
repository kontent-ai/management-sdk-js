import { IManagementClientConfig } from '../config';
import { ContentManagementQueryService } from '../services';

export class DataQueryOptional<TResult, TData> {

    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ContentManagementQueryService,
            data: TData | undefined) => TResult
    ) {
    }

    /**
     * Gets query without data
     */
    withoutData(): TResult {
        return this.buildResult(this.config, this.queryService, undefined);
    }

    /**
     * Gets query with data
     * @param data Data for query
     */
    withData(data: TData): TResult {
        return this.buildResult(this.config, this.queryService, data);
    }
}
