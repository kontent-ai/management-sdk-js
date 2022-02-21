export namespace EnvironmentContracts {
    export interface IEnvironmentCloningStateResponseContract {
        cloning_state: 'in_progress' | 'failed' | 'done';
    }

    export interface IDeleteEnvironmentResponseContract {
    }
}
