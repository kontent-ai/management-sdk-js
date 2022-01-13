import { SharedModels } from '../shared/shared-models';
import { RoleContracts } from '../../contracts';

export namespace RoleModels {
    export class Role implements SharedModels.IBaseModel<RoleContracts.IRoleContract> {
        public id!: string;
        public name!: string;
        public codename?: string;
        public _raw!: RoleContracts.IRoleContract;

        constructor(data: { id: string; name: string; codename?: string; _raw: RoleContracts.IRoleContract }) {
            Object.assign(this, data);
        }
    }
}
