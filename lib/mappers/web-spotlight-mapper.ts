import { IResponse } from '@kontent-ai/core-sdk';

import { WebSpotlightContracts } from '../contracts';
import { BaseMapper } from './base-mapper';
import { WebSpotlightResponses } from '../responses';
import { WebSpotlightModels } from '../models';

export class WebSpotlightMapper extends BaseMapper {
    mapWebSpotlightStatusResponse(
        response: IResponse<WebSpotlightContracts.IWebSpotlightStatus>
    ): WebSpotlightResponses.WebSpotlightStatusResponse {
        return new WebSpotlightResponses.WebSpotlightStatusResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapWebSpotlightStatus(response.data)
        );
    }

    private mapWebSpotlightStatus(
        rawData: WebSpotlightContracts.IWebSpotlightStatus
    ): WebSpotlightModels.WebSpotlightStatus {
        return new WebSpotlightModels.WebSpotlightStatus({
            _raw: rawData,
            enabled: rawData.enabled,
            rootType: rawData.root_type ? this.mapIdReference(rawData.root_type) : undefined
        });
    }
}

export const webSpotlightMapper = new WebSpotlightMapper();
