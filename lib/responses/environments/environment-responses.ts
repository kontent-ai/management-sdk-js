import { BaseResponses } from '../base-responses';
import { EnvironmentContracts } from '../../contracts';
import { EnvironmentModels } from '../../models/environments/environment.models';
import { SharedModels } from '../../models';

export namespace EnvironmentResponses {
    export class EnvironmentValidationIssuesListResponse extends BaseResponses.BaseContentManagementListResponse<
        EnvironmentContracts.IEnvironmentValidationListResponseContract,
        EnvironmentModels.EnvironmentValidationVariantIssueModel | EnvironmentModels.EnvironmentValidationTypeIssueModel
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: EnvironmentContracts.IEnvironmentValidationListResponseContract,
            data: {
                items: (
                    | EnvironmentModels.EnvironmentValidationVariantIssueModel
                    | EnvironmentModels.EnvironmentValidationTypeIssueModel
                )[];
                pagination: SharedModels.Pagination;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class EnvironmentValidationIssuesListAllResponse extends BaseResponses.ContentManagementListAllResponse<
        EnvironmentValidationIssuesListResponse,
        EnvironmentModels.EnvironmentValidationVariantIssueModel
    > {
        constructor(data: {
            items: EnvironmentModels.EnvironmentValidationVariantIssueModel[];
            responses: EnvironmentValidationIssuesListResponse[];
        }) {
            super(data);
        }
    }

    export class StartEnvironmentValidationResponse extends BaseResponses.BaseContentManagementResponse<
        EnvironmentContracts.IStartEnvironmentValidationResponseContract,
        {
            id: string;
            status: EnvironmentContracts.EnvironmentValidationStatus;
            validation_result: EnvironmentContracts.EnvironmentValidationResult;
        }
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: EnvironmentContracts.IStartEnvironmentValidationResponseContract,
            data: {
                id: string;
                status: EnvironmentContracts.EnvironmentValidationStatus;
                validation_result: EnvironmentContracts.EnvironmentValidationResult;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class CheckEnvironmentValidationResponse extends BaseResponses.BaseContentManagementResponse<
        EnvironmentContracts.ICheckEnvironmentValidationResponseContract,
        {
            id: string;
            status: EnvironmentContracts.EnvironmentValidationStatus;
            validation_result: EnvironmentContracts.EnvironmentValidationResult;
        }
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: EnvironmentContracts.ICheckEnvironmentValidationResponseContract,
            data: {
                id: string;
                status: EnvironmentContracts.EnvironmentValidationStatus;
                validation_result: EnvironmentContracts.EnvironmentValidationResult;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class EnvironmentInformationResponse extends BaseResponses.BaseContentManagementResponse<
        EnvironmentContracts.IEnvironmentInformationResponseContract,
        {
            project: EnvironmentModels.EnvironmentInformationModel;
        }
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: EnvironmentContracts.IEnvironmentInformationResponseContract,
            data: {
                project: EnvironmentModels.EnvironmentInformationModel;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class GetCloningStateResponse extends BaseResponses.BaseContentManagementResponse<
        EnvironmentContracts.IEnvironmentCloningStateResponseContract,
        {
            cloningInfo: EnvironmentModels.EnvironmentCloningStateModel;
        }
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: EnvironmentContracts.IEnvironmentCloningStateResponseContract,
            data: {
                cloningInfo: EnvironmentModels.EnvironmentCloningStateModel;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class ModifyEnvironmentResponse extends BaseResponses.BaseContentManagementResponse<
        EnvironmentContracts.IModifyEnvironmentResponseContract,
        EnvironmentModels.EnvironmentModel
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: EnvironmentContracts.IModifyEnvironmentResponseContract,
            data: EnvironmentModels.EnvironmentModel
        ) {
            super(debug, rawData, data);
        }
    }

    export class CloneEnvironmentResponse extends BaseResponses.BaseContentManagementResponse<
        EnvironmentContracts.ICloneEnvironmentResponseContract,
        EnvironmentModels.CloneEnvironmentModel
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: EnvironmentContracts.ICloneEnvironmentResponseContract,
            data: EnvironmentModels.CloneEnvironmentModel
        ) {
            super(debug, rawData, data);
        }
    }
}
