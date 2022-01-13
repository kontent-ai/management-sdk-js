import { SharedModels } from '../shared/shared-models';
import { SubscriptionContracts } from '../../contracts';

export namespace SubscriptionModels {
    export interface ISubscriptionEnvironment {
        name: string;
        id: string;
    }

    export class SubscriptionProject
        implements SharedModels.IBaseModel<SubscriptionContracts.ISubscriptionProjectContract>
    {
        public id!: string;
        public isActive!: boolean;
        public name!: string;
        public environments!: ISubscriptionEnvironment[];
        public _raw!: SubscriptionContracts.ISubscriptionProjectContract;

        constructor(data: {
            id: string;
            isActive: boolean;
            name: string;
            environments: ISubscriptionEnvironment[];
            _raw: SubscriptionContracts.ISubscriptionProjectContract;
        }) {
            Object.assign(this, data);
        }
    }

    export interface ISubscriptionCollectionGroup {
        collections: ISubscriptionCollection[];
        roles: ISubscriptionUserRole[];
    }

    export interface ISubscriptionUserRoleLanguage {
        id: string;
        externalId?: string;
        codename: string;
        name: string;
        isActive: boolean;
    }

    export interface ISubscriptionUserRole {
        id: string;
        name: string;
        codename: string;
        languages: ISubscriptionUserRoleLanguage[];
    }

    export interface ISubscriptionCollection {
        id: string;
        codename: string;
        externalId?: string;
    }

    export interface ISubscriptionUserEnvironment {
        id: string;
        name: string;
        isUserActive: boolean;
        lastActivityAt?: Date;
        collectionGroups: ISubscriptionCollectionGroup[];
    }

    export interface ISubscriptionUserProject {
        id: string;
        name: string;
        environments: ISubscriptionUserEnvironment[];
    }

    export class SubscriptionUser {
        public id!: string;
        public email!: string;
        public hasPendingInvitation!: boolean;
        public projects!: ISubscriptionUserProject[];

        public firstName?: string;
        public lastName?: string;

        constructor(data: {
            id: string;
            email: string;
            hasPendingInvitation: boolean;
            projects: ISubscriptionUserProject[];

            firstName?: string;
            lastName?: string;
            _raw: SubscriptionContracts.ISubscriptionUserContract;
        }) {
            Object.assign(this, data);
        }
    }
}
