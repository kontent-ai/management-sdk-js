import { IManagementClientConfig } from '../config';
import { ManagementQueryService } from '../services';

export class DataQueryOptional<TResult, TData> {

    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ManagementQueryService,
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
