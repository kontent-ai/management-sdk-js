import { IResponse } from '@kontent-ai/core-sdk';

import { PreviewContracts } from '../contracts';
import { PreviewModels } from '../models';
import { BaseMapper } from './base-mapper';
import { PreviewResponses } from '../responses/preview/preview-responses';

export class PreviewMapper extends BaseMapper {
    mapPreviewConfigurationResponse(
        response: IResponse<PreviewContracts.IPreviewConfigurationContract>
    ): PreviewResponses.PreviewConfigurationResponse {
        return new PreviewResponses.PreviewConfigurationResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapPreviewConfiguration(response.data)
        );
    }

    mapModifyConfigurationResponse(
        response: IResponse<PreviewContracts.IPreviewConfigurationContract>
    ): PreviewResponses.ModifyConfigurationResponse {
        return new PreviewResponses.ModifyConfigurationResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapPreviewConfiguration(response.data)
        );
    }

    mapLivePreviewConfigurationResponse(
        response: IResponse<PreviewContracts.ILivePreviewConfigurationContract>
    ): PreviewResponses.LivePreviewConfigurationResponse {
        return new PreviewResponses.LivePreviewConfigurationResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapLivePreviewConfiguration(response.data)
        );
    }

    mapChangeLivePreviewConfigurationResponse(
        response: IResponse<PreviewContracts.ILivePreviewConfigurationContract>
    ): PreviewResponses.ChangeLivePreviewConfigurationResponse {
        return new PreviewResponses.ChangeLivePreviewConfigurationResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapLivePreviewConfiguration(response.data)
        );
    }

    private mapLivePreviewConfiguration(
        rawItem: PreviewContracts.ILivePreviewConfigurationContract
    ): PreviewModels.LivePreviewConfiguration {
        return new PreviewModels.LivePreviewConfiguration({
            status: rawItem.status,
            _raw: rawItem
        });
    }

    private mapPreviewConfiguration(
        rawItem: PreviewContracts.IPreviewConfigurationContract
    ): PreviewModels.PreviewConfiguration {
        return new PreviewModels.PreviewConfiguration({
            _raw: rawItem,
            previewUrlPatterns: rawItem.preview_url_patterns.map((urlPatternsContract) => {
                const urlPatterns: PreviewModels.IPreviewUrlPatterns = {
                    contentType: urlPatternsContract.content_type,
                    urlPatterns: urlPatternsContract.url_patterns.map((urlPatternContract) => {
                        const urlPattern: PreviewModels.IPreviewUrlPattern = {
                            space: urlPatternContract.space,
                            urlPattern: urlPatternContract.url_pattern
                        };

                        return urlPattern;
                    })
                };

                return urlPatterns;
            }),
            spaceDomains: rawItem.space_domains
        });
    }
}

export const previewMapper = new PreviewMapper();
