import { SharedContracts } from './shared-contracts';

export namespace CustomAppsContracts {
    export interface ICustomAppContract {
        id: string;
        name: string;
        codename: string;
        source_url: string;
        config: string | null;
        allowed_roles?: SharedContracts.ICodenameIdReferenceContract[];
        display_mode: CustomAppDisplayMode;
    }

    export interface ICustomAppsListResponseContract {
        custom_apps: ICustomAppContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }

    export type CustomAppDisplayMode = 'fullScreen' | 'dialog';
}
