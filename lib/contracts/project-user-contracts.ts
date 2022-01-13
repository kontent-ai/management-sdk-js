import { SharedContracts } from './shared-contracts';

export namespace ProjectUserContracts {
    export interface IProjectUserRoleContract {
        id: string;
        languages: SharedContracts.IReferenceObjectContract[];
    }

    export interface IUserContract {
        user_id: string;
        collection_groups: IProjectUserCollectionGroupContract[];
    }

    export interface IProjectUserCollectionGroupContract {
        collections: SharedContracts.IReferenceObjectContract[];
        roles: IProjectUserRoleContract[];
    }

    export interface IInviteUserResponseContract extends IUserContract {}

    export interface IChangeUserRolesResponseContract extends IUserContract {}
}
