import { IResponse } from '@kontent-ai/core-sdk';
import { EnvironmentModels } from '../models';
import { EnvironmentResponses } from '../responses';

import { EnvironmentContracts } from '../contracts';
import { BaseMapper } from './base-mapper';
import CloneEnvironmentModel = EnvironmentModels.CloneEnvironmentModel;

export class EnvironmentMapper extends BaseMapper {
    mapGetEnvironmentCloningStateResponse(
        response: IResponse<EnvironmentContracts.IEnvironmentCloningStateResponseContract>
    ): EnvironmentResponses.GetCloningStateResponse {
        return new EnvironmentResponses.GetCloningStateResponse(super.mapResponseDebug(response), response.data, {
            cloningInfo: new EnvironmentModels.EnvironmentCloningStateModel(response.data.cloning_state)
        });
    }

    mapModifyEnvironmentResponse(
        response: IResponse<EnvironmentContracts.IModifyEnvironmentResponseContract>
    ): EnvironmentResponses.ModifyEnvironmentResponse {
        return new EnvironmentResponses.ModifyEnvironmentResponse(
            super.mapResponseDebug(response),
            response.data,
            new EnvironmentModels.EnvironmentModel(response.data.id, response.data.name, response.data.is_production)
        );
    }

    mapCloneEnvironmentResponse(
        response: IResponse<EnvironmentContracts.ICloneEnvironmentResponseContract>
    ): EnvironmentResponses.CloneEnvironmentResponse {
        return new EnvironmentResponses.CloneEnvironmentResponse(
            super.mapResponseDebug(response),
            response.data,
            new CloneEnvironmentModel(
                response.data.id,
                response.data.management_api_key,
                response.data.delivery_preview_api_key,
                response.data.secured_delivery_api_key
            )
        );
    }

    mapProjectValidationIssuesListResponse(
        response: IResponse<EnvironmentContracts.IEnvironmentValidationListResponseContract>
    ): EnvironmentResponses.EnvironmentValidationIssuesListResponse {
        return new EnvironmentResponses.EnvironmentValidationIssuesListResponse(
            super.mapResponseDebug(response),
            response.data,
            {
                items: response.data.issues.map((m) => this.mapEnvironmentValidationIssue(m)),
                pagination: super.mapPagination(response.data.pagination)
            }
        );
    }

    mapStartEnvironmentValidationResponse(
        response: IResponse<EnvironmentContracts.IStartEnvironmentValidationResponseContract>
    ): EnvironmentResponses.StartEnvironmentValidationResponse {
        return new EnvironmentResponses.StartEnvironmentValidationResponse(
            super.mapResponseDebug(response),
            response.data,
            {
                id: response.data.id,
                status: response.data.status,
                validation_result: response.data.validation_result
            }
        );
    }

    mapCheckEnvironmentValidationResponse(
        response: IResponse<EnvironmentContracts.ICheckEnvironmentValidationResponseContract>
    ): EnvironmentResponses.CheckEnvironmentValidationResponse {
        return new EnvironmentResponses.CheckEnvironmentValidationResponse(
            super.mapResponseDebug(response),
            response.data,
            {
                id: response.data.id,
                status: response.data.status,
                validation_result: response.data.validation_result
            }
        );
    }

    mapEnvironmentInformationResponse(
        response: IResponse<EnvironmentContracts.IEnvironmentInformationResponseContract>
    ): EnvironmentResponses.EnvironmentInformationResponse {
        return new EnvironmentResponses.EnvironmentInformationResponse(super.mapResponseDebug(response), response.data, {
            project: new EnvironmentModels.EnvironmentInformationModel(
                response.data.id,
                response.data.name,
                response.data.environment
            )
        });
    }

    mapProjectModel(raw: EnvironmentContracts.IEnvironmentReportModelContract): EnvironmentModels.EnvironmentReportModel {
        return new EnvironmentModels.EnvironmentReportModel(raw.id, raw.name);
    }

    mapTypeModel(raw: EnvironmentContracts.IEnvironmentTypeContract): EnvironmentModels.EnvironmentTypeModel {
        return new EnvironmentModels.EnvironmentTypeModel(raw.id, raw.name, raw.codename);
    }

    mapItemModel(
        raw: EnvironmentContracts.IEnvironmentVariantContentItemContract
    ): EnvironmentModels.EnvironmentVariantContentItemModel {
        return new EnvironmentModels.EnvironmentVariantContentItemModel(raw.id, raw.name, raw.codename);
    }

    mapLanguageModel(
        raw: EnvironmentContracts.IEnvironmentVariantLanguageContract
    ): EnvironmentModels.EnvironmentVariantLanguageModel {
        return new EnvironmentModels.EnvironmentVariantLanguageModel(raw.id, raw.name, raw.codename);
    }

    mapIssueModel(raw: EnvironmentContracts.IEnvironmentIssueContract): EnvironmentModels.EnvironmentIssueModel {
        return new EnvironmentModels.EnvironmentIssueModel(this.mapVariantElementModel(raw.element), raw.messages);
    }

    mapTypeIssue(raw: EnvironmentContracts.IEnvironmentTypeIssueContract): EnvironmentModels.EnvironmentTypeIssueModel {
        return new EnvironmentModels.EnvironmentTypeIssueModel(
            this.mapTypeModel(raw.type),
            raw.issues.map((m) => this.mapIssueModel(m))
        );
    }

    mapVariantIssue(
        raw: EnvironmentContracts.IEnvironmentVariantIssueContract
    ): EnvironmentModels.EnvironmentVariantIssueModel {
        return new EnvironmentModels.EnvironmentVariantIssueModel(
            this.mapItemModel(raw.item),
            this.mapLanguageModel(raw.language),
            raw.issues.map((m) => this.mapIssueModel(m))
        );
    }

    mapVariantElementModel(
        raw: EnvironmentContracts.IEnvironmentVariantElementContract
    ): EnvironmentModels.EnvironmentVariantElementModel {
        return new EnvironmentModels.EnvironmentVariantElementModel(raw.id, raw.name, raw.codename);
    }

    mapEnvironmentValidationIssue(
        raw: EnvironmentContracts.IEnvironmentValidationIssueContract
    ): EnvironmentModels.EnvironmentValidationVariantIssueModel | EnvironmentModels.EnvironmentValidationTypeIssueModel {
        if (raw.issue_type === 'variant_issue') {
            return new EnvironmentModels.EnvironmentValidationVariantIssueModel(
                this.mapItemModel(raw.item as EnvironmentContracts.IEnvironmentVariantContentItemContract),
                this.mapLanguageModel(raw.language as EnvironmentContracts.IEnvironmentVariantLanguageContract),
                raw.issues.map((m) => this.mapIssueModel(m))
            );
        }

        if (raw.issue_type === 'type_issue') {
            return new EnvironmentModels.EnvironmentValidationTypeIssueModel(
                this.mapTypeModel(raw.type as EnvironmentContracts.IEnvironmentTypeContract),
                raw.issues.map((m) => this.mapIssueModel(m))
            );
        }

        throw Error(`Unsupported issue type '${raw.issue_type}'`);
    }
}

export const environmentMapper = new EnvironmentMapper();
