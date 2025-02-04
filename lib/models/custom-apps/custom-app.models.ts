import { CustomAppsContracts, SharedContracts } from '../../contracts';
import { SharedModels } from '../shared/shared-models';

export namespace CustomAppModels {
    export class CustomApp implements SharedModels.IBaseModel<CustomAppsContracts.ICustomAppContract> {
        public name: string;
        public codename: string;
        public source_url: string;
        public config: string | null;
        public allowed_roles?: SharedContracts.ICodenameIdReferenceContract[];
        public _raw!: CustomAppsContracts.ICustomAppContract;

        constructor(data: {
            name: string;
            codename: string;
            source_url: string;
            config: string | null;
            allowed_roles?: SharedContracts.ICodenameIdReferenceContract[];
            _raw: CustomAppsContracts.ICustomAppContract;
        }) {
            this.name = data.name;
            this.codename = data.codename;
            this._raw = data._raw;
            this.source_url = data.source_url;
            this.config = data.config;
        }
    }

    export interface IAddCustomAppData {
        name: string;
        codename: string;
        source_url: string;
        config?: string | null;
        allowed_roles?: SharedContracts.ICodenameIdReferenceContract[];
    }

    export type ModifyCustomAppPropertyName = 'name' | 'source_url' | 'config' | 'allowed_roles';

    export type ModifyCustomAppOperation =
        | {
              op: 'addInto';
              value: SharedContracts.IReferenceObjectContract;
              property_name: Extract<ModifyCustomAppPropertyName, 'allowed_roles'>;
          }
        | (
              | {
                    op: 'replace';
                    value: SharedContracts.IReferenceObjectContract;
                    property_name: Extract<ModifyCustomAppPropertyName, 'allowed_roles'>;
                }
              | {
                    op: 'replace';
                    value: string;
                    property_name: Extract<ModifyCustomAppPropertyName, 'name' | 'source_url'>;
                }
              | {
                    op: 'replace';
                    value: string | null;
                    property_name: Extract<ModifyCustomAppPropertyName, 'config'>;
                }
          )
        | {
              op: 'remove';
              value: SharedContracts.IReferenceObjectContract;
              property_name: Extract<ModifyCustomAppPropertyName, 'allowed_roles'>;
          };
}
