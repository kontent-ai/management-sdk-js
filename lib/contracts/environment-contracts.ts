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

    export interface IModifyEnvironmentResponseContract extends IEnvironmentResponseContract {
    }

    export interface ICloneEnvironmentResponseContract {
        id: string;
        management_api_key: string;
        delivery_preview_api_key: string;
        secured_delivery_api_key: string;
    }

    export interface IMarkEnvironmentAsProductionResponseContract {
    }
}
