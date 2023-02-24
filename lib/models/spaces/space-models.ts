import { SpaceContracts } from 'lib/contracts/space-contracts';
import { SharedModels } from '../shared/shared-models';

export namespace SpaceModels {

    export type ModifySpaceOperation = 'replace';

    export interface IModifySpaceeData {
        op: ModifySpaceOperation;
        path: string;
        value?: any;

        before?: SharedModels.IReferenceObject;
        after?: SharedModels.IReferenceObject;
    }


    export class Space implements SharedModels.IBaseModel<SpaceContracts.ISpaceModelContract> {

        public id!: string;
        public name!: string;
        public codename!: string;
        public _raw!: SpaceContracts.ISpaceModelContract;

        constructor(
            data: {
                id: string,
                name: string,
                codename: string,
                _raw: SpaceContracts.ISpaceModelContract
            }
        ) {
            Object.assign(this, data);
        }
    }
}

