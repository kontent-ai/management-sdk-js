import { BaseMapper } from './base-mapper';
import { IResponse } from '@kentico/kontent-core';
import { EnvironmentContracts } from '../contracts';
import { EnvironmentResponses } from '../responses/environments/environment-responses';
import { EnvironmentModels } from '../models/environments/environment.models';
import CloneEnvironmentModel = EnvironmentModels.CloneEnvironmentModel;

export class EnvironmentMapper extends BaseMapper {
    mapGetEnvironmentCloningStateResponse(
        response: IResponse<EnvironmentContracts.IEnvironmentCloningStateResponseContract>
    ): EnvironmentResponses.GetCloningStateResponse {
        return new EnvironmentResponses.GetCloningStateResponse(
            super.mapResponseDebug(response),
            response.data, {
                cloningInfo: new EnvironmentModels.EnvironmentCloningStateModel(response.data.cloning_state)
            }
        );
    }

    mapModifyEnvironmentResponse(
        response: IResponse<EnvironmentContracts.IModifyEnvironmentResponseContract>
    ): EnvironmentResponses.ModifyEnvironmentResponse {
        return new EnvironmentResponses.ModifyEnvironmentResponse(
            super.mapResponseDebug(response),
            response.data,
            new EnvironmentModels.EnvironmentModel(
                response.data.id,
                response.data.name,
                response.data.is_production
            )
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
}

export const environmentMapper = new EnvironmentMapper();
