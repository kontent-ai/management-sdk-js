import { IResponse } from '@kontent-ai/core-sdk';

import { SpaceContracts } from '../contracts';
import { SpaceModels } from '../models';
import { SpaceResponses } from '../responses';
import { BaseMapper } from './base-mapper';

export class SpacesMapper extends BaseMapper {

    mapListingSpacesResponse(
        response: IResponse<SpaceContracts.ISpacesListingResponseContract>
    ): SpaceResponses.SpacesResponse {
        const pagination = super.mapPagination(response.data.pagination);
        const items = response.data.items.map((m) => this.mapSpace(m));

        return new SpaceResponses.SpacesResponse(super.mapResponseDebug(response), response.data, {
            pagination: pagination,
            items: items
        });
    }

    mapViewSpaceResponse(
        response: IResponse<SpaceContracts.ISpaceModelContract>
    ): SpaceResponses.ViewSpaceResponse {
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

    mapUpdateSpaceResponse(
        response: IResponse<SpaceContracts.IUpdateSpaceResponseContract>
    ): SpaceResponses.UpdateSpaceResponse {
        return new SpaceResponses.UpdateSpaceResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapSpace(response.data)
        );
    }

    mapUpsertSpaceResponse(
        response: IResponse<SpaceContracts.IUpsertSpaceResponseContract>
    ): SpaceResponses.UpsertSpaceResponse {
        return new SpaceResponses.UpsertSpaceResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapSpace(response.data)
        );
    }

    mapSpace(rawItem: SpaceContracts.ISpaceModelContract): SpaceModels.Space {
        return new SpaceModels.Space({
            codename: rawItem.codename,
            id: rawItem.id,
            name: rawItem.name,
            _raw: rawItem
        });
    }
}

export const spacesMapper = new SpacesMapper();
