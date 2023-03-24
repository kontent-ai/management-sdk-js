import { SharedContracts } from "./shared-contracts";

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

    export interface IEnvironmentInformationResponseContract {
        id: string;
        name: string;
        environment: string;
    }

    export type EnvironmentValidationIssueType = 'type_issue' | 'variant_issue';

    export interface IEnvironmentValidationItemIssueContract {
        element:  IEnvironmentVariantElementContract;
        messages: string[];
    }

    export interface IEnvironmentValidationIssueContract {
        issue_type: EnvironmentValidationIssueType;
        item?: IEnvironmentVariantContentItemContract;
        type?: IEnvironmentTypeContract;
        language?: IEnvironmentVariantLanguageContract;
        issues: IEnvironmentValidationItemIssueContract[];
    }

    export interface IEnvironmentValidationListResponseContract {
        issues: IEnvironmentValidationIssueContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }

    export type EnvironmentValidationStatus = 'finished' | 'queued' | 'failed';
    export type EnvironmentValidationResult = 'none' | 'no_issues' | 'issues_found';

    export interface IStartEnvironmentValidationResponseContract {
        id: string;
        status: EnvironmentValidationStatus;
        validation_result: EnvironmentValidationResult;
    }

    export interface ICheckEnvironmentValidationResponseContract {
        id: string;
        status: EnvironmentValidationStatus;
        validation_result: EnvironmentValidationResult;
    }

    export interface IEnvironmentReportModelContract {
        id: string;
        name: string;
    }

    export interface IEnvironmentVariantContentItemContract {
        id: string;
        name: string;
        codename: string;
    }

    export interface IEnvironmentVariantLanguageContract {
        id: string;
        name: string;
        codename: string;
    }

    export interface IEnvironmentVariantElementContract {
        id: string;
        name: string;
        codename: string;
    }

    export interface IEnvironmentTypeContract {
        id: string;
        name: string;
        codename: string;
    }

    export interface IEnvironmentTypeIssueContract {
        type: IEnvironmentTypeContract;
        issues: IEnvironmentIssueContract[];
    }

    export interface IEnvironmentIssueContract {
        element: IEnvironmentVariantElementContract;
        messages: string[];
    }

    export interface IEnvironmentVariantIssueContract {
        item: IEnvironmentVariantContentItemContract;
        language: IEnvironmentVariantLanguageContract;
        issues: IEnvironmentIssueContract[];
    }
}
