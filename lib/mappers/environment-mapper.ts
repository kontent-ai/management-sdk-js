import { BaseMapper } from './base-mapper';
import { IResponse } from '@kentico/kontent-core';
import { EnvironmentContracts } from '../contracts';
import { EnvironmentResponses } from '../responses/environments/environment-responses';
import { EnvironmentModels } from '../models/environments/environments.model';

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
}

export const environmentMapper = new EnvironmentMapper();
