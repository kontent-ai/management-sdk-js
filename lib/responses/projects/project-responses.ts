import { ProjectContracts } from '../../contracts/project-contracts';
import { ProjectModels } from '../../models/projects/project.models';
import { BaseResponses } from '../base-responses';

export namespace ProjectResponses {

    export class ValidateProjectContentResponse extends BaseResponses.BaseContentManagementResponse<ProjectContracts.IProjectReportResponseContract, {
        project: ProjectModels.ProjectReportModel,
        variantIssues: ProjectModels.ProjectVariantIssueModel[],
        typeIssues: ProjectModels.ProjectTypeIssueModel[]
    }>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ProjectContracts.IProjectReportResponseContract,
            data: {
                project: ProjectModels.ProjectReportModel,
                variantIssues: ProjectModels.ProjectVariantIssueModel[],
                typeIssues: ProjectModels.ProjectTypeIssueModel[]
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class ProjectInformationResponse extends BaseResponses.BaseContentManagementResponse<ProjectContracts.IProjectInformationResponseContract, {
        project: ProjectModels.ProjectInformationModel,
    }>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: ProjectContracts.IProjectInformationResponseContract,
            data: {
                project: ProjectModels.ProjectInformationModel,
            }
        ) {
            super(debug, rawData, data);
        }
    }
}

