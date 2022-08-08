import { Identifiers } from '../../models';
import { IManagementClientConfig } from '../../config';
import { RoleResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ViewRoleQuery extends BaseQuery<RoleResponses.ViewRoleResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        private identifier: Identifiers.RoleIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<RoleResponses.ViewRoleResponse> {
        return this.queryService.viewRoleAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.viewRole(this.identifier);
    }
}
