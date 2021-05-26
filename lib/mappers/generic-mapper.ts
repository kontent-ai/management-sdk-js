import { IResponse } from '@kentico/kontent-core';

import { GenericResponses } from '../responses';
import { BaseMapper } from './base-mapper';

export class GenericMapper extends BaseMapper {
    mapGenericResponse(response: IResponse<any>): GenericResponses.GenericResponse {
        return new GenericResponses.GenericResponse(super.mapResponseDebug(response), response.data);
    }
}

export const genericMapper = new GenericMapper();
