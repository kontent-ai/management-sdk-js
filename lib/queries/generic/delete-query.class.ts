import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../../config';
import { GenericResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class DeleteQuery extends BaseQuery<GenericResponses.GenericResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public action: string,
    ) {
        super(config, queryService);
    }

    toObservable(): Observable<GenericResponses.GenericResponse> {
        return this.queryService.genericDeleteResponse(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.action;
    }
}
