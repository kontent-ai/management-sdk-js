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
    export interface ICodenameIdReferenceContract {
        id?: string;
        codename?: string;
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

    export interface IEmptyResponseContract {
    }
}
