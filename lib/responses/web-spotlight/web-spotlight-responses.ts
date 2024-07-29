import { WebSpotlightContracts } from '../../contracts';
import { WebSpotlightModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace WebSpotlightResponses {
    export class WebSpotlightStatusResponse extends BaseResponses.BaseContentManagementResponse<
        WebSpotlightContracts.IWebSpotlightStatus,
        WebSpotlightModels.WebSpotlightStatus
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: WebSpotlightContracts.IWebSpotlightStatus,
            data: WebSpotlightModels.WebSpotlightStatus
        ) {
            super(debug, rawData, data);
        }
    }
}
