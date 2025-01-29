import { SharedContracts, SpaceContracts } from '../../contracts';
import { SharedModels } from '../shared/shared-models';

export namespace SpaceModels {
    export type ModifySpaceOperation = 'replace';

    type ModifySpaceProperties = {
        property_name: "name" | "codename";
        value: string;
    } | {
        property_name: "web_spotlight_root_item";
        value: SharedContracts.IReferenceObjectContract;
    }
    | {
        property_name: "collections";
        value: SharedContracts.IReferenceObjectContract[];
    }

    export type IModifySpaceData = { op: ModifySpaceOperation } & ModifySpaceProperties;

    export interface IAddSpaceData {
        name: string;
        codename?: string;
        web_spotlight_root_item?: SharedContracts.IReferenceObjectContract;
        collections?: SharedContracts.IReferenceObjectContract[];
    }

    export class Space implements SharedModels.IBaseModel<SpaceContracts.ISpaceContract> {
        public id!: string;
        public name!: string;
        public codename!: string;
        public webSpotlightRootItem?: SharedModels.ReferenceObject;
        public collections?: SharedModels.ReferenceObject[];
        public _raw!: SpaceContracts.ISpaceContract;

        constructor(data: {
            id: string;
            name: string;
            codename: string;
            webSpotlightRootItem?: SharedModels.ReferenceObject;
            collections?: SharedModels.ReferenceObject[];
            _raw: SpaceContracts.ISpaceContract;
        }) {
            Object.assign(this, data);
        }
    }
}
