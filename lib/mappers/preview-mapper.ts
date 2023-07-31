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
