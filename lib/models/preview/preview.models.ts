import { SharedModels } from '../shared/shared-models';
import { PreviewContracts } from '../../contracts';

export namespace PreviewModels {
    export interface IPreviewSpace {
        id: string;
    }

    export interface IPreviewContentType {
        id: string;
    }

    export interface IPreviewUrlPattern {
        space: IPreviewSpace | null;
        urlPattern: string;
    }

    export interface IPreviewUrlPatterns {
        contentType: IPreviewContentType;
        urlPatterns: IPreviewUrlPattern[];
    }

    export interface IPreviewSpaceDomain {
        space: IPreviewSpace;
        domain: string;
    }

    export class PreviewConfiguration
        implements SharedModels.IBaseModel<PreviewContracts.IPreviewConfigurationContract>
    {
        public spaceDomains: IPreviewSpaceDomain[];
        public previewUrlPatterns: IPreviewUrlPatterns[];
        public _raw: PreviewContracts.IPreviewConfigurationContract;

        constructor(data: {
            spaceDomains: IPreviewSpaceDomain[];
            previewUrlPatterns: IPreviewUrlPatterns[];
            _raw: PreviewContracts.IPreviewConfigurationContract;
        }) {
            this.spaceDomains = data.spaceDomains;
            this.previewUrlPatterns = data.previewUrlPatterns;
            this._raw = data._raw;
        }
    }

    export interface IModifyPreviewConfigurationData {
        space_domains: {
            space: {
                id?: string;
                codename?: string;
            };
            domain: string;
        }[];
        preview_url_patterns: {
            content_type: {
                id?: string;
                codename?: string;
                external_id?: string;
            };
            url_patterns: {
                space: null | {
                    id?: string;
                    codename?: string;
                };
                url_pattern: string;
            }[];
        }[];
    }
}
