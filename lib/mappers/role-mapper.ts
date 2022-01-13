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

    mapViewRoleResponse(response: IResponse<RoleContracts.IRoleContract>): RoleResponses.ViewRoleResponse {
        return new RoleResponses.ViewRoleResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapRole(response.data)
        );
    }

    mapRole(rawItem: RoleContracts.IRoleContract): RoleModels.Role {
        return new RoleModels.Role({
            id: rawItem.id,
            name: rawItem.name,
            codename: rawItem.codename,
            _raw: rawItem
        });
    }
}

export const roleMapper = new RoleMapper();
