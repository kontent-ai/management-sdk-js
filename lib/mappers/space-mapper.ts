import { IResponse } from '@kontent-ai/core-sdk';

import { SpaceContracts } from '../contracts';
import { SpaceModels } from '../models';
import { SpaceResponses } from '../responses';
import { BaseMapper } from './base-mapper';

export class SpacesMapper extends BaseMapper {
    mapListingSpacesResponse(
        response: IResponse<SpaceContracts.ISpacesListingResponseContract>
    ): SpaceResponses.SpacesListResponse {
        const items = response.data.map((m) => this.mapSpace(m));

        return new SpaceResponses.SpacesListResponse(super.mapResponseDebug(response), response.data, items);
    }

    mapViewSpaceResponse(response: IResponse<SpaceContracts.ISpaceContract>): SpaceResponses.ViewSpaceResponse {
        return new SpaceResponses.ViewSpaceResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapSpace(response.data)
        );
    }

    mapAddSpaceResponse(
        response: IResponse<SpaceContracts.IAddSpaceResponseContract>
    ): SpaceResponses.AddSpaceResponse {
        return new SpaceResponses.AddSpaceResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapSpace(response.data)
        );
    }

    mapModifySpaceResponse(
        response: IResponse<SpaceContracts.IModifySpaceResponseContract>
    ): SpaceResponses.ModifySpaceResponse {
        return new SpaceResponses.ModifySpaceResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapSpace(response.data)
        );
    }

    mapSpace(rawItem: SpaceContracts.ISpaceContract): SpaceModels.Space {
        return new SpaceModels.Space({
            codename: rawItem.codename,
            id: rawItem.id,
            name: rawItem.name,
            webSpotlightRootItem: rawItem.webSpotlightRootItem,
            _raw: rawItem
        });
    }
}

export const spacesMapper = new SpacesMapper();
