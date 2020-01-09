import { SharedModels } from '../shared/shared-models';
import { LanguageContracts } from '../../contracts';

export namespace LanguageModels {
    export class LanguageModel implements SharedModels.IBaseModel<LanguageContracts.ILanguageModelContract> {
        public name: string;
        public id: string;
        public codename: string;
        public externalId?: string;
        public isActive: boolean;
        public isDefault: boolean;
        public fallbackLanguage?: FallbackLanguageModel;
        public _raw!: LanguageContracts.ILanguageModelContract;

        constructor(data: {
            name: string;
            id: string;
            codename: string;
            externalId?: string;
            isActive: boolean;
            isDefault: boolean;
            fallbackLanguage?: FallbackLanguageModel;
            _raw: LanguageContracts.ILanguageModelContract;
        }) {
            this.name = data.name;
            this.id = data.id;
            this.codename = data.codename;
            this.externalId = data.externalId;
            this.isActive = data.isActive;
            this.isDefault = data.isDefault;
            this.fallbackLanguage = data.fallbackLanguage;
            this._raw = data._raw;
        }
    }

    export class FallbackLanguageModel {
        public id: string;

        constructor(data: { id: string }) {
            this.id = data.id;
        }
    }

    export type ModifyLanguageOperation = 'replace';

    export interface IModifyLanguageData {
        op: ModifyLanguageOperation;
        property_name: 'name' | 'codename' | 'fallback_language' | 'is_active';
        value: string | boolean | SharedModels.IReferenceObject;
    }

    export interface IAddLanguageData {
        name: string;
        codename: string;
        is_active?: boolean;
        fallback_language?: SharedModels.IReferenceObject;
        external_id?: string;
    }
}
