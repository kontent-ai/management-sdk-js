import { SharedContracts } from './shared-contracts';

export namespace WebSpotlightContracts {
    export interface IWebSpotlightStatus {
        enabled: boolean;
        root_type: SharedContracts.IIdReferenceContract | null;
    }
}
