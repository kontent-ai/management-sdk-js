import { IResponse } from '@kontent-ai/core-sdk';

import { SharedContracts } from '../contracts';
import { SharedModels } from '../models';
import { BaseResponses } from '../responses';

export abstract class BaseMapper {
    mapResponseDebug(baseResponse: IResponse<any>): BaseResponses.IContentManagementResponseDebug {
        if (!baseResponse) {
            throw Error(`Cannot map debug model from the response`);
        }

        return {
            response: baseResponse
        };
    }

    mapPagination(rawPagination: SharedContracts.IPaginationModelContract): SharedModels.Pagination {
        return new SharedModels.Pagination(rawPagination.continuation_token, rawPagination.next_page);
    }

    mapReference(rawReference: SharedContracts.IReferenceObjectContract): SharedModels.ReferenceObject {
        return new SharedModels.ReferenceObject({
            codename: rawReference.codename,
            externalId: rawReference.external_id,
            id: rawReference.id
        });
    }

    mapIdReference(rawReference: SharedContracts.IIdReferenceContract): SharedModels.IIdRefenceObject {
        return {
            id: rawReference.id
        };
    }

    mapEmptyResponse(response: IResponse<any>): BaseResponses.EmptyContentManagementResponse {
        return new BaseResponses.EmptyContentManagementResponse(this.mapResponseDebug(response), undefined, undefined);
    }
}
