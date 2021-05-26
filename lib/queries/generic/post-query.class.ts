

import { IManagementClientConfig } from '../../config';
import { GenericResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class PostQuery extends BaseQuery<GenericResponses.GenericResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public action: string,
        public data: any
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<GenericResponses.GenericResponse> {
        return this.queryService.genericPostResponse(this.getUrl(), this.data, this.queryConfig);
    }

    protected getAction(): string {
        return this.action;
    }
}
