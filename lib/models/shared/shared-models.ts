
export namespace SharedModels {

    export interface IBaseModel<TContract> {
        _raw: TContract;
    }

    export class Pagination {
        constructor(
            public continuationToken: string | null,
            public nextPage: string | null
        ) { }
    }

    export class ValidationError {
        public message!: string;

        constructor(
            data: {
                message: string
            }
        ) {
            Object.assign(this, data);
        }
    }

    export class ContentManagementBaseKontentError {

        public validationErrors: ValidationError[];
        public message: string;
        public requestId: string;
        public errorCode: number;
        public originalError: any;

        constructor(data:
            {
                message: string;
                requestId: string;
                errorCode: number;
                originalError: any;
                validationErrors: ValidationError[]
            }
        ) {
            this.validationErrors = data.validationErrors;
            this.message = data.message;
            this.requestId = data.requestId;
            this.errorCode = data.errorCode;
            this.originalError = data.originalError;
        }

    }

    export interface IReferenceObject {
        id?: string;
        codename?: string;
        externalId?: string;
    }

    export class ReferenceObject implements IReferenceObject {
        public id?: string;
        public codename?: string;
        public externalId?: string;

        constructor(
            data: {
                id?: string;
                codename?: string;
                externalId?: string;
            }
        ) {
            Object.assign(this, data);
        }
    }
}
