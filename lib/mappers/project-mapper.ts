import { IResponse } from '@kontent-ai/core-sdk';

import { ProjectContracts } from '../contracts';
import { ProjectModels } from '../models/projects/project.models';
import { ProjectResponses } from '../responses';
import { BaseMapper } from './base-mapper';

export class ProjectMapper extends BaseMapper {
    mapProjectValidationIssuesListResponse(
        response: IResponse<ProjectContracts.IProjectValidationListResponseContract>
    ): ProjectResponses.ProjectValidationIssuesListResponse {
        return new ProjectResponses.ProjectValidationIssuesListResponse(
            super.mapResponseDebug(response),
            response.data,
            {
                items: response.data.issues.map((m) => this.mapProjectValidationIssue(m)),
                pagination: super.mapPagination(response.data.pagination)
            }
        );
    }

    mapStartProjectValidationResponse(
        response: IResponse<ProjectContracts.IStartProjectValidationResponseContract>
    ): ProjectResponses.StartProjectValidationResponse {
        return new ProjectResponses.StartProjectValidationResponse(super.mapResponseDebug(response), response.data, {
            id: response.data.id,
            status: response.data.status,
            validation_result: response.data.validation_result
        });
    }

    mapCheckProjectValidationResponse(
        response: IResponse<ProjectContracts.ICheckProjectValidationResponseContract>
    ): ProjectResponses.CheckProjectValidationResponse {
        return new ProjectResponses.CheckProjectValidationResponse(super.mapResponseDebug(response), response.data, {
            id: response.data.id,
            status: response.data.status,
            validation_result: response.data.validation_result
        });
    }

    mapValidateProjectContentResponse(
        response: IResponse<ProjectContracts.IProjectReportResponseContract>
    ): ProjectResponses.ValidateProjectContentResponse {
        return new ProjectResponses.ValidateProjectContentResponse(super.mapResponseDebug(response), response.data, {
            project: this.mapProjectModel(response.data.project),
            typeIssues: response.data.type_issues.map((m) => this.mapTypeIssue(m)),
            variantIssues: response.data.variant_issues.map((m) => this.mapVariantIssue(m))
        });
    }

    mapProjectInformationResponse(
        response: IResponse<ProjectContracts.IProjectInformationResponseContract>
    ): ProjectResponses.ProjectInformationResponse {
        return new ProjectResponses.ProjectInformationResponse(super.mapResponseDebug(response), response.data, {
            project: new ProjectModels.ProjectInformationModel(
                response.data.id,
                response.data.name,
                response.data.environment
            )
        });
    }

    mapProjectModel(raw: ProjectContracts.IProjectReportModelContract): ProjectModels.ProjectReportModel {
        return new ProjectModels.ProjectReportModel(raw.id, raw.name);
    }

    mapTypeModel(raw: ProjectContracts.IProjectTypeContract): ProjectModels.ProjectTypeModel {
        return new ProjectModels.ProjectTypeModel(raw.id, raw.name, raw.codename);
    }

    mapItemModel(
        raw: ProjectContracts.IProjectVariantContentItemContract
    ): ProjectModels.ProjectVariantContentItemModel {
        return new ProjectModels.ProjectVariantContentItemModel(raw.id, raw.name, raw.codename);
    }

    mapLanguageModel(raw: ProjectContracts.IProjectVariantLanguageContract): ProjectModels.ProjectVariantLanguageModel {
        return new ProjectModels.ProjectVariantLanguageModel(raw.id, raw.name, raw.codename);
    }

    mapIssueModel(raw: ProjectContracts.IProjectIssueContract): ProjectModels.ProjectIssueModel {
        return new ProjectModels.ProjectIssueModel(this.mapVariantElementModel(raw.element), raw.messages);
    }

    mapTypeIssue(raw: ProjectContracts.IProjectTypeIssueContract): ProjectModels.ProjectTypeIssueModel {
        return new ProjectModels.ProjectTypeIssueModel(
            this.mapTypeModel(raw.type),
            raw.issues.map((m) => this.mapIssueModel(m))
        );
    }

    mapVariantIssue(raw: ProjectContracts.IProjectVariantIssueContract): ProjectModels.ProjectVariantIssueModel {
        return new ProjectModels.ProjectVariantIssueModel(
            this.mapItemModel(raw.item),
            this.mapLanguageModel(raw.language),
            raw.issues.map((m) => this.mapIssueModel(m))
        );
    }

    mapVariantElementModel(
        raw: ProjectContracts.IProjectVariantElementContract
    ): ProjectModels.ProjectVariantElementModel {
        return new ProjectModels.ProjectVariantElementModel(raw.id, raw.name, raw.codename);
    }

    mapProjectValidationIssue(
        raw: ProjectContracts.IProjectValidationIssueContract
    ): ProjectModels.ProjectValidationVariantIssueModel | ProjectModels.ProjectValidationTypeIssueModel {
        if (raw.issue_type === 'variant_issue') {
            return new ProjectModels.ProjectValidationVariantIssueModel(
                this.mapItemModel(raw.item as ProjectContracts.IProjectVariantContentItemContract),
                this.mapLanguageModel(raw.language as ProjectContracts.IProjectVariantLanguageContract),
                raw.issues.map((m) => this.mapIssueModel(m))
            );
        }

        if (raw.issue_type === 'type_issue') {
            return new ProjectModels.ProjectValidationTypeIssueModel(
                this.mapTypeModel(raw.type as ProjectContracts.IProjectTypeContract),
                raw.issues.map((m) => this.mapIssueModel(m))
            );
        }

        throw Error(`Unsupported issue type '${raw.issue_type}'`);
    }
}

export const projectMapper = new ProjectMapper();
