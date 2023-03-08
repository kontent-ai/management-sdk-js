import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { BaseResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class DeleteSpaceQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public identifier: Identifiers.SpaceIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<BaseResponses.EmptyContentManagementResponse> {
        return this.queryService.deleteSpaceAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.deleteSpace(this.identifier);
    }
}
