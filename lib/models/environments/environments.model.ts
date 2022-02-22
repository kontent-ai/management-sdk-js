export namespace EnvironmentModels {
    export class EnvironmentCloningStateModel {
        constructor(
            public cloningState: string
        ) { }
    }

    export interface IModifyEnvironmentData {
        op: string;
        value: string;
    }

    export interface IRenameEnvironmentData extends IModifyEnvironmentData {
        op: 'rename-environment';
    }

    export class EnvironmentModel {
        constructor(
            public id: string,
            public name: string,
            public isProduction: boolean
        ) { }
    }
}
