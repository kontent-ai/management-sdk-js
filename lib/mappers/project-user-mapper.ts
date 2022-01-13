import { IResponse } from '@kentico/kontent-core';

import { ProjectUserContracts } from '../contracts';
import { ProjectUserModels } from '../models';
import { ProjectUsersResponses } from '../responses';
import { BaseMapper } from './base-mapper';

export class ProjectUserMapper extends BaseMapper {
    mapInviteUserResponse(
        response: IResponse<ProjectUserContracts.IInviteUserResponseContract>
    ): ProjectUsersResponses.InviteUserResponse {
        return new ProjectUsersResponses.InviteUserResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapProjectUser(response.data)
        );
    }

    mapChangeUserRolesResponse(
        response: IResponse<ProjectUserContracts.IChangeUserRolesResponseContract>
    ): ProjectUsersResponses.ChangeUserRolesResponse {
        return new ProjectUsersResponses.ChangeUserRolesResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapProjectUser(response.data)
        );
    }

    mapCollectionGroup(
        rawItem: ProjectUserContracts.IProjectUserCollectionGroupContract
    ): ProjectUserModels.CollectionGroup {
        return new ProjectUserModels.CollectionGroup({
            collections: rawItem.collections,
            roles: rawItem.roles,
            _raw: rawItem
        });
    }

    mapProjectUser(rawItem: ProjectUserContracts.IUserContract): ProjectUserModels.ProjectUser {
        return new ProjectUserModels.ProjectUser({
            userId: rawItem.user_id,
            collectionGroups: rawItem.collection_groups.map((m) => this.mapCollectionGroup(m)),
            _raw: rawItem
        });
    }
}

export const projectUserMapper = new ProjectUserMapper();
