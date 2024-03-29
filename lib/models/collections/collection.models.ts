import { SharedModels } from '../shared/shared-models';
import { CollectionContracts } from '../../contracts';

export namespace CollectionModels {
    export class Collection implements SharedModels.IBaseModel<CollectionContracts.ICollectionContract> {
        public id!: string;
        public name!: string;
        public codename!: string;
        public _raw!: CollectionContracts.ICollectionContract;

        constructor(data: {
            id: string;
            name: string;
            codename: string;
            _raw: CollectionContracts.ICollectionContract;
        }) {
            Object.assign(this, data);
        }
    }

    export interface ISetCollectionData {
        op: 'addInto' | 'replace' | 'move' | 'remove';
        value?:
            | string
            | {
                  name: string;
                  codename?: string;
                  externalId?: string;
              };
        after?: SharedModels.IReferenceObject;
        before?: SharedModels.IReferenceObject;
        reference?: SharedModels.IReferenceObject;
        property_name?: string;
    }
}
