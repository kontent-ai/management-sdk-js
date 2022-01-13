export namespace RoleContracts {
    export interface IRoleContract {
        id: string;
        name: string;
        codename?: string;
    }

    export interface IRoleListResponseContract {
        roles: IRoleContract[];
    }
}
