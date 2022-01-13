import { SharedContracts } from './shared-contracts';

export namespace SubscriptionContracts {
    export interface ISubscriptionProjectEnvironmentContract {
        id: string;
        name: string;
    }

    export interface ISubscriptionProjectContract {
        id: string;
        is_active: boolean;
        name: string;
        environments: ISubscriptionProjectEnvironmentContract[];
    }

    export interface IListSubscriptionProjectsResponseContract {
        pagination: SharedContracts.IPaginationModelContract;
        projects: ISubscriptionProjectContract[];
    }

    export interface IListSubscriptionUsersResponseContract {
        pagination: SharedContracts.IPaginationModelContract;
        users: ISubscriptionUserContract[];
    }

    export interface ISubscriptionCollectionGroupContract {
        collections: SharedContracts.IReferenceObjectContract[];
        roles: ISubscriptionUserRoleContract[];
    }

    export interface ISubscriptionUserRoleLanguageContract {
      id: string;
      external_id?: string;
      codename: string;
      name: string;
      is_active: boolean;
    }

    export interface ISubscriptionUserRoleContract {
        id: string;
        name: string;
        codename: string;
        languages: ISubscriptionUserRoleLanguageContract[];
    }

    export interface ISubscriptionUserEnvironmentContract {
        id: string;
        name: string;
        is_user_active: boolean;
        last_activity_at?: string;
        collection_groups: ISubscriptionCollectionGroupContract[];
    }

    export interface ISubscriptionUserProjectContract {
        id: string;
        name: string;
        environments: ISubscriptionUserEnvironmentContract[];
    }

    export interface ISubscriptionUserContract {
        id: string;
        email: string;
        has_pending_invitation: boolean;
        projects: ISubscriptionUserProjectContract[];

        first_name?: string;
        last_name?: string;
    }
}
