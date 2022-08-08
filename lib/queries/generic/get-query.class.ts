

import { IManagementClientConfig } from '../../config';
import { GenericResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class GetQuery extends BaseQuery<GenericResponses.GenericResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public action: string,
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<GenericResponses.GenericResponse> {
        return this.queryService.genericGetResponseAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.action;
    }
}
