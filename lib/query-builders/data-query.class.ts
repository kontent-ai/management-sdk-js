import { IManagementClientConfig } from '../config';
import { ManagementQueryService } from '../services';

export class DataQuery<TResult, TData> {

    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ManagementQueryService,
            data: TData) => TResult
    ) {
    }

    /**
     * Gets query with data
     * @param data Data for query
     */
    withData(data: TData): TResult {
        return this.buildResult(this.config, this.queryService, data);
    }
}
