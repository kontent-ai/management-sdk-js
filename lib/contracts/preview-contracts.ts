export namespace PreviewContracts {
    export interface IPreviewSpaceContract {
        id: string;
    }

    export interface IPreviewContentTypeContract {
        id: string;
    }

    export interface IPreviewUrlPatternContract {
        space: IPreviewSpaceContract | null;
        url_pattern: string;
    }

    export interface IPreviewUrlPatternsContract {
        content_type: IPreviewContentTypeContract;
        url_patterns: IPreviewUrlPatternContract[];
    }

    export interface IPreviewSpaceDomainContract {
        space: IPreviewSpaceContract;
        domain: string;
    }

    export interface IPreviewConfigurationContract {
        space_domains: IPreviewSpaceDomainContract[];
        preview_url_patterns: IPreviewUrlPatternsContract[];
    }
}
