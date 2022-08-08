import { IManagementClientConfig } from '../../config';
import { RoleResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ListRolesQuery extends BaseQuery<RoleResponses.RoleListResponse> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<RoleResponses.RoleListResponse> {
        return this.queryService.listRolesAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listRoles();
    }
}
