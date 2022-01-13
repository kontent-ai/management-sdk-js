import { SharedModels } from '../shared/shared-models';
import { ProjectUserContracts, SharedContracts } from '../../contracts';

export namespace ProjectUserModels {
    export interface IProjectUserCollectionGroup {
        collections: SharedContracts.IReferenceObjectContract[];
        roles: IProjectUserRole[];
    }

    export interface IProjectUserRole {
        id: string;
        languages: SharedContracts.IReferenceObjectContract[];
    }

    export class ProjectUser implements SharedModels.IBaseModel<ProjectUserContracts.IUserContract> {
        userId!: string;
        collectionGroups!: CollectionGroup[];
        _raw!: ProjectUserContracts.IUserContract;

        constructor(data: {
            userId: string;
            collectionGroups: CollectionGroup[];
            _raw: ProjectUserContracts.IUserContract;
        }) {
            Object.assign(this, data);
        }
    }

    export class CollectionGroup
        implements SharedModels.IBaseModel<ProjectUserContracts.IProjectUserCollectionGroupContract>
    {
        collections!: SharedContracts.IReferenceObjectContract[];
        roles!: ProjectUserModels.IProjectUserRole[];
        _raw!: ProjectUserContracts.IProjectUserCollectionGroupContract;

        constructor(data: {
            collections: SharedContracts.IReferenceObjectContract[];
            roles: ProjectUserModels.IProjectUserRole[];
            _raw: ProjectUserContracts.IProjectUserCollectionGroupContract;
        }) {
            Object.assign(this, data);
        }
    }

    export interface ICollectionGroupsData {
        collections: SharedContracts.IReferenceObjectContract[];
        roles: {
            id: string;
            languages: SharedContracts.IReferenceObjectContract[];
        }[];
    }

    export interface IInviteUserData {
        email: string;
        collection_groups: ICollectionGroupsData[];
    }

    export interface IChangeUserRoleData {
        collection_groups: ICollectionGroupsData[];
    }
}
