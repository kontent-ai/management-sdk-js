import { SpaceContracts } from '../../contracts';
import { SpaceModels, SharedModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace SpaceResponses {

    export class SpacesResponse extends BaseResponses.BaseContentManagementListResponse<SpaceContracts.ISpacesListingResponseContract, SpaceModels.Space>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: SpaceContracts.ISpacesListingResponseContract,
            data: {
                items: SpaceModels.Space[],
                pagination: SharedModels.Pagination
            }
        ) {
            super(debug, rawData, data);
        }
    }
    export class ViewSpaceResponse extends BaseResponses.BaseContentManagementResponse<SpaceContracts.IViewSpaceResponseContract, SpaceModels.Space> {

        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: SpaceContracts.IViewSpaceResponseContract,
            data: SpaceModels.Space
        ) {
            super(debug, rawData, data);
        }
    }
}