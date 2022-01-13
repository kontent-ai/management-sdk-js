import { IManagementClientConfig } from '../../config';
import { RoleResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ListRolesQuery extends BaseQuery<RoleResponses.RoleListResponse> {
    constructor(protected config: IManagementClientConfig, protected queryService: ContentManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<RoleResponses.RoleListResponse> {
        return this.queryService.listRoles(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listRoles();
    }
}
