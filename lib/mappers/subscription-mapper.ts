import { IResponse } from '@kentico/kontent-core';

import { SubscriptionContracts } from '../contracts';
import { SharedModels, SubscriptionModels } from '../models';
import { SubscriptionResponses } from '../responses';
import { BaseMapper } from './base-mapper';

export class SubscriptionMapper extends BaseMapper {
    mapSubscriptionProjectsListResponse(
        response: IResponse<SubscriptionContracts.IListSubscriptionProjectsResponseContract>
    ): SubscriptionResponses.SubscriptionProjectsListResponse {
        const subscriptionProjects: SubscriptionModels.SubscriptionProject[] = response.data.projects.map((m) =>
            this.mapSubscriptionProject(m)
        );
        const pagination: SharedModels.Pagination = super.mapPagination(response.data.pagination);

        return new SubscriptionResponses.SubscriptionProjectsListResponse(
            super.mapResponseDebug(response),
            response.data,
            {
                pagination: pagination,
                items: subscriptionProjects
            }
        );
    }

    mapSubscriptionUsersListResponse(
        response: IResponse<SubscriptionContracts.IListSubscriptionUsersResponseContract>
    ): SubscriptionResponses.SubscriptionUsersListResponse {
        const subscriptionProjects: SubscriptionModels.SubscriptionUser[] = response.data.users.map((m) =>
            this.mapSubscriptionUser(m)
        );
        const pagination: SharedModels.Pagination = super.mapPagination(response.data.pagination);

        return new SubscriptionResponses.SubscriptionUsersListResponse(
            super.mapResponseDebug(response),
            response.data,
            {
                pagination: pagination,
                items: subscriptionProjects
            }
        );
    }

    mapViewSubscriptionProjectResponse(
        response: IResponse<SubscriptionContracts.ISubscriptionProjectContract>
    ): SubscriptionResponses.ViewSubscriptionProjectResponse {
        return new SubscriptionResponses.ViewSubscriptionProjectResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapSubscriptionProject(response.data)
        );
    }

    mapViewSubscriptionUserResponse(
        response: IResponse<SubscriptionContracts.ISubscriptionUserContract>
    ): SubscriptionResponses.ViewSubscriptionUserResponse {
        return new SubscriptionResponses.ViewSubscriptionUserResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapSubscriptionUser(response.data)
        );
    }

    mapSubscriptionProject(
        raw: SubscriptionContracts.ISubscriptionProjectContract
    ): SubscriptionModels.SubscriptionProject {
        return new SubscriptionModels.SubscriptionProject({
            environments: raw.environments,
            id: raw.id,
            isActive: raw.is_active,
            name: raw.name,
            _raw: raw
        });
    }

    mapSubscriptionUser(raw: SubscriptionContracts.ISubscriptionUserContract): SubscriptionModels.SubscriptionUser {
        return new SubscriptionModels.SubscriptionUser({
            email: raw.email,
            hasPendingInvitation: raw.has_pending_invitation,
            id: raw.id,
            firstName: raw.first_name,
            lastName: raw.last_name,
            projects: raw.projects.map((rawProject) => {
                const project: SubscriptionModels.ISubscriptionUserProject = {
                    id: rawProject.id,
                    name: rawProject.name,
                    environments: rawProject.environments.map((rawEnvironment) => {
                        const environment: SubscriptionModels.ISubscriptionUserEnvironment = {
                            id: rawEnvironment.id,
                            name: rawEnvironment.name,
                            isUserActive: rawEnvironment.is_user_active,
                            lastActivityAt: rawEnvironment.last_activity_at
                                ? new Date(rawEnvironment.last_activity_at)
                                : undefined,
                            collectionGroups: rawEnvironment.collection_groups.map((rawCollectionGroup) => {
                                const collectionGroup: SubscriptionModels.ISubscriptionCollectionGroup = {
                                    collections: rawCollectionGroup.collections,
                                    roles: rawCollectionGroup.roles.map((rawRole) => {
                                        const role: SubscriptionModels.ISubscriptionUserRole = {
                                            codename: rawRole.codename,
                                            id: rawRole.id,
                                            languages: rawRole.languages.map((rawLanguage) => {
                                                const language: SubscriptionModels.ISubscriptionUserRoleLanguage = {
                                                    codename: rawLanguage.codename,
                                                    id: rawLanguage.id,
                                                    isActive: rawLanguage.is_active,
                                                    name: rawLanguage.name
                                                };

                                                return language;
                                            }),
                                            name: rawRole.name
                                        };

                                        return role;
                                    })
                                };

                                return collectionGroup;
                            })
                        };
                        return environment;
                    })
                };
                return project;
            }),
            _raw: raw
        });
    }
}

export const subscriptionMapper = new SubscriptionMapper();
