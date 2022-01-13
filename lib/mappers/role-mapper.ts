import { IResponse } from '@kentico/kontent-core';

import { RoleContracts } from '../contracts';
import { RoleModels } from '../models';
import { RoleResponses } from '../responses';
import { BaseMapper } from './base-mapper';

export class RoleMapper extends BaseMapper {
    mapRoleListResponse(response: IResponse<RoleContracts.IRoleListResponseContract>): RoleResponses.RoleListResponse {
        const items = response.data.roles.map((m) => this.mapRole(m));

        return new RoleResponses.RoleListResponse(super.mapResponseDebug(response), response.data, {
            roles: items
        });
    }

    mapRole(rawCollection: RoleContracts.IRoleContract): RoleModels.Role {
        return new RoleModels.Role({
            id: rawCollection.id,
            name: rawCollection.name,
            codename: rawCollection.codename,
            _raw: rawCollection
        });
    }
}

export const roleMapper = new RoleMapper();
