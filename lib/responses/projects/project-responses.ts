import { SharedModels } from '../../models';
import { ProjectContracts } from '../../contracts/project-contracts';
import { ProjectModels } from '../../models/projects/project.models';
import { BaseResponses } from '../base-responses';

export namespace ProjectResponses {
    export class ProjectValidationIssuesListResponse extends BaseResponses.BaseContentManagementListResponse<
        ProjectContracts.IProjectValidationListResponseContract,
        ProjectModels.ProjectValidationIssueModel
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ProjectContracts.IProjectValidationListResponseContract,
            data: {
                items: ProjectModels.ProjectValidationIssueModel[];
                pagination: SharedModels.Pagination;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class ProjectValidationIssuesListAllResponse extends BaseResponses.ContentManagementListAllResponse<
        ProjectValidationIssuesListResponse,
        ProjectModels.ProjectValidationIssueModel
    > {
        constructor(data: {
            items: ProjectModels.ProjectValidationIssueModel[];
            responses: ProjectValidationIssuesListResponse[];
        }) {
            super(data);
        }
    }

    export class StartProjectValidationResponse extends BaseResponses.BaseContentManagementResponse<
        ProjectContracts.IStartProjectValidationResponseContract,
        {
            id: string;
            status: ProjectContracts.ProjectValidationStatus;
            validation_result: ProjectContracts.ProjectValidationResult;
        }
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ProjectContracts.IStartProjectValidationResponseContract,
            data: {
                id: string;
                status: ProjectContracts.ProjectValidationStatus;
                validation_result: ProjectContracts.ProjectValidationResult;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class CheckProjectValidationResponse extends BaseResponses.BaseContentManagementResponse<
        ProjectContracts.ICheckProjectValidationResponseContract,
        {
            id: string;
            status: ProjectContracts.ProjectValidationStatus;
            validation_result: ProjectContracts.ProjectValidationResult;
        }
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ProjectContracts.ICheckProjectValidationResponseContract,
            data: {
                id: string;
                status: ProjectContracts.ProjectValidationStatus;
                validation_result: ProjectContracts.ProjectValidationResult;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class ValidateProjectContentResponse extends BaseResponses.BaseContentManagementResponse<
        ProjectContracts.IProjectReportResponseContract,
        {
            project: ProjectModels.ProjectReportModel;
            variantIssues: ProjectModels.ProjectVariantIssueModel[];
            typeIssues: ProjectModels.ProjectTypeIssueModel[];
        }
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ProjectContracts.IProjectReportResponseContract,
            data: {
                project: ProjectModels.ProjectReportModel;
                variantIssues: ProjectModels.ProjectVariantIssueModel[];
                typeIssues: ProjectModels.ProjectTypeIssueModel[];
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class ProjectInformationResponse extends BaseResponses.BaseContentManagementResponse<
        ProjectContracts.IProjectInformationResponseContract,
        {
            project: ProjectModels.ProjectInformationModel;
        }
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ProjectContracts.IProjectInformationResponseContract,
            data: {
                project: ProjectModels.ProjectInformationModel;
            }
        ) {
            super(debug, rawData, data);
        }
    }
}
