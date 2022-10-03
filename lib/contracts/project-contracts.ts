import { SharedContracts } from './shared-contracts';

export namespace ProjectContracts {

    export interface IProjectInformationResponseContract {
        id: string;
        name: string;
        environment: string;
    }

    export type ProjectValidationIssueType = 'type_issue' | 'variant_issue';

    export interface IProjectValidationItemIssueContract {
        element:  IProjectVariantElementContract;
        messages: string[];
    }

    export interface IProjectValidationIssueContract {
        issue_type: ProjectValidationIssueType;
        item?: IProjectVariantContentItemContract;
        type?: IProjectTypeContract;
        language?: IProjectVariantLanguageContract;
        issues: IProjectValidationItemIssueContract[];
    }

    export interface IProjectValidationListResponseContract {
        issues: IProjectValidationIssueContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }

    export type ProjectValidationStatus = 'finished' | 'queued' | 'failed';
    export type ProjectValidationResult = 'none' | 'no_issues' | 'issues_found';

    export interface IStartProjectValidationResponseContract {
        id: string;
        status: ProjectValidationStatus;
        validation_result: ProjectValidationResult;
    }

    export interface ICheckProjectValidationResponseContract {
        id: string;
        status: ProjectValidationStatus;
        validation_result: ProjectValidationResult;
    }

    export interface IProjectReportResponseContract {
        project: IProjectReportModelContract;
        variant_issues: IProjectVariantIssueContract[];
        type_issues: IProjectTypeIssueContract[];
    }

    export interface IProjectReportModelContract {
        id: string;
        name: string;
    }

    export interface IProjectVariantContentItemContract {
        id: string;
        name: string;
        codename: string;
    }

    export interface IProjectVariantLanguageContract {
        id: string;
        name: string;
        codename: string;
    }

    export interface IProjectVariantElementContract {
        id: string;
        name: string;
        codename: string;
    }

    export interface IProjectTypeContract {
        id: string;
        name: string;
        codename: string;
    }

    export interface IProjectTypeIssueContract {
        type: IProjectTypeContract;
        issues: IProjectIssueContract[];
    }

    export interface IProjectIssueContract {
        element: IProjectVariantElementContract;
        messages: string[];
    }

    export interface IProjectVariantIssueContract {
        item: IProjectVariantContentItemContract;
        language: IProjectVariantLanguageContract;
        issues: IProjectIssueContract[];
    }

}
