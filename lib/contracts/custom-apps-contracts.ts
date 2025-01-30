import { SharedContracts } from './shared-contracts';

export namespace CustomAppsContracts {
    export interface ICustomAppContract {
        name: string;
        codename: string;
        source_url: string;
        config: string | null;
        allowed_roles?: SharedContracts.ICodenameIdReferenceContract[];
    }
}
