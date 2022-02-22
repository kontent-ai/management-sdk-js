export namespace EnvironmentContracts {
    export interface IEnvironmentCloningStateResponseContract {
        cloning_state: 'in_progress' | 'failed' | 'done';
    }

    export interface IDeleteEnvironmentResponseContract {
    }

    export interface IEnvironmentResponseContract {
        id: string;
        name: string;
        is_production: boolean;
    }

    export interface IRenameEnvironmentResponseContract extends IEnvironmentResponseContract {
    }
}
