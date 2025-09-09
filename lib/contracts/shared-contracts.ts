export namespace SharedContracts {
    export interface IPaginationModelContract {
        continuation_token: string | null;
        next_page: string | null;
    }

    export interface IReferenceObjectContract {
        id?: string;
        codename?: string;
        external_id?: string;
    }

    export type UserReferenceContract = Required<Pick<UserReferenceDataContract, 'id'>>;

    export type UserReferenceDataContract =
        | {
            id: string;
            email?: never;
        }
        | {
            id?: never;
            email: string;
        };

    export interface ICodenameIdReferenceContract {
        id?: string;
        codename?: string;
    }

    export interface IIdReferenceContract {
        id: string;
    }

    export interface IValidationErrorContract {
        message: string;
    }

    export interface IContentManagementError {
        message: string;
        request_id: string;
        error_code: number;
        validation_errors?: IValidationErrorContract[];
    }

    export interface IWorkflowStepsReferenceContract {
        workflow_identifier: IReferenceObjectContract;
        step_identifiers: IReferenceObjectContract[];
    }

    export interface ITaxonomyGroupReferenceContract {
        taxonomy_identifier: IReferenceObjectContract;
        term_identifiers?: IReferenceObjectContract[];
        include_uncategorized?: boolean;
    }

    export interface IEmptyResponseContract { }
}
