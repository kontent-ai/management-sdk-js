import { IResponse } from '@kontent-ai/core-sdk';
import { CustomAppsContracts } from '../contracts';
import { CustomAppModels } from '../models';
import { CustomAppsResponses } from '../responses';
import { BaseMapper } from './base-mapper';

export class CustomAppMapper extends BaseMapper {
    mapGetCustomAppResponse(
        response: IResponse<CustomAppsContracts.ICustomAppContract>
    ): CustomAppsResponses.GetCustomAppResponse {
        return new CustomAppsResponses.GetCustomAppResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapCustomApp(response.data)
        );
    }

    mapListCustomAppsResponse(
        response: IResponse<CustomAppsContracts.ICustomAppsListResponseContract>
    ): CustomAppsResponses.CustomAppsListResponse {
        return new CustomAppsResponses.CustomAppsListResponse(super.mapResponseDebug(response), response.data, {
            pagination: super.mapPagination(response.data.pagination),
            items: response.data.custom_apps.map((m) => this.mapCustomApp(m))
        });
    }

    mapModifyCustomAppResponse(
        response: IResponse<CustomAppsContracts.ICustomAppContract>
    ): CustomAppsResponses.ModifyCustomAppResponse {
        return new CustomAppsResponses.ModifyCustomAppResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapCustomApp(response.data)
        );
    }

    mapAddCustomAppResponse(
        response: IResponse<CustomAppsContracts.ICustomAppContract>
    ): CustomAppsResponses.AddCustomAppResponse {
        return new CustomAppsResponses.AddCustomAppResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapCustomApp(response.data)
        );
    }

    mapCustomApp(rawCustomApp: CustomAppsContracts.ICustomAppContract): CustomAppModels.CustomApp {
        return new CustomAppModels.CustomApp({
            ...rawCustomApp,
            _raw: rawCustomApp
        });
    }
}

export const customAppMapper = new CustomAppMapper();
