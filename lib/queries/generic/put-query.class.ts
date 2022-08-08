

import { IManagementClientConfig } from '../../config';
import { GenericResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class PutQuery extends BaseQuery<GenericResponses.GenericResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public action: string,
        public data: any
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<GenericResponses.GenericResponse> {
        return this.queryService.genericPutResponseAsync(this.getUrl(), this.data, this.queryConfig);
    }

    protected getAction(): string {
        return this.action;
    }
}
