export namespace Identifiers {
    export enum TaskIdentifierEnum {
        InternalId = 'internalId'
    }

    export enum ContentItemIdentifierEnum {
        ExternalId = 'externalId',
        InternalId = 'internalId',
        Codename = 'codename'
    }

    export enum ContentTypeIdentifierEnum {
        ExternalId = 'externalId',
        InternalId = 'internalId',
        Codename = 'codename'
    }

    export enum RenditionIdentifierEnum {
        ExternalId = 'externalId',
        InternalId = 'internalId'
    }

    export enum CollectionIdentifierEnum {
        ExternalId = 'externalId',
        InternalId = 'internalId',
        Codename = 'codename'
    }

    export enum LanguageIdentifierEnum {
        InternalId = 'internalId',
        Codename = 'codename',
        ExternalId = 'externalId'
    }

    export enum WorkflowIdentifierEnum {
        Id = 'id',
        Codename = 'codename'
    }

    export enum TaxonomyIdentifierEnum {
        InternalId = 'internalId',
        ExternalId = 'externalId',
        Codename = 'codename'
    }

    export enum AssetIdentifierEnum {
        InternalId = 'internalId',
        ExternalId = 'externalId'
    }

    export enum WebhookIdentifierEnum {
        Id = 'id'
    }

    export enum ProjectIdentifierEnum {
        Id = 'id'
    }

    export enum UserIdentifierEnum {
        Id = 'id',
        Email = 'email'
    }

    export enum RoleIdentifierEnum {
        Id = 'id',
        Codename = 'codename'
    }

    export enum SpaceIdentifierEnum {
        InternalId = 'internalId',
        ExternalId = 'externalId',
        Codename = 'codename'
    }


    export class AssetIdentifier {
        constructor(public identifier: AssetIdentifierEnum, public value: string) {}

        getParamValue(): string {
            if (this.identifier === AssetIdentifierEnum.InternalId) {
                return `${this.value}`;
            }
            if (this.identifier === AssetIdentifierEnum.ExternalId) {
                return `external-id/${this.value}`;
            }
            throw Error(`Unsupported identifier '${this.identifier}'`);
        }
    }

    export class TaxonomyIdentifier {
        constructor(public identifier: TaxonomyIdentifierEnum, public value: string) {}

        getParamValue(): string {
            if (this.identifier === TaxonomyIdentifierEnum.InternalId) {
                return `${this.value}`;
            }
            if (this.identifier === TaxonomyIdentifierEnum.ExternalId) {
                return `external-id/${this.value}`;
            }
            if (this.identifier === TaxonomyIdentifierEnum.Codename) {
                return `codename/${this.value}`;
            }
            throw Error(`Unsupported identifier '${this.identifier}'`);
        }
    }

    export class ContentTypeIdentifier {
        constructor(public identifier: ContentTypeIdentifierEnum, public value: string) {}

        getParamValue(): string {
            if (this.identifier === ContentTypeIdentifierEnum.Codename) {
                return `codename/${this.value}`;
            }
            if (this.identifier === ContentTypeIdentifierEnum.InternalId) {
                return `${this.value}`;
            }
            if (this.identifier === ContentTypeIdentifierEnum.ExternalId) {
                return `external-id/${this.value}`;
            }
            throw Error(`Unsupported identifier '${this.identifier}'`);
        }
    }

    export class RenditionIdentifier {
        constructor(public identifier: RenditionIdentifierEnum, public value: string) {}

        getParamValue(): string {
            if (this.identifier === RenditionIdentifierEnum.InternalId) {
                return `${this.value}`;
            }
            if (this.identifier === RenditionIdentifierEnum.ExternalId) {
                return `external-id/${this.value}`;
            }
            throw Error(`Unsupported identifier '${this.identifier}'`);
        }
    }

    export class CollectionIdentifier {
        constructor(public identifier: CollectionIdentifierEnum, public value: string) {}

        getParamValue(): string {
            if (this.identifier === CollectionIdentifierEnum.Codename) {
                return `codename/${this.value}`;
            }
            if (this.identifier === CollectionIdentifierEnum.InternalId) {
                return `${this.value}`;
            }
            if (this.identifier === CollectionIdentifierEnum.ExternalId) {
                return `external-id/${this.value}`;
            }
            throw Error(`Unsupported identifier '${this.identifier}'`);
        }
    }

    export class WorkflowIdentifier {
        constructor(public identifier: WorkflowIdentifierEnum, public value: string) {}

        getParamValue(): string {
            if (this.identifier === WorkflowIdentifierEnum.Id) {
                return `${this.value}`;
            }
            if (this.identifier === WorkflowIdentifierEnum.Codename) {
                return `codename/${this.value}`;
            }
            throw Error(`Unsupported identifier '${this.identifier}'`);
        }
    }

    export class TaskIdentifier {
        constructor(public identifier: TaskIdentifierEnum, public value: string) {}

        getParamValue(): string {
            if (this.identifier === TaskIdentifierEnum.InternalId) {
                return `${this.value}`;
            }

            throw Error(`Unsupported identifier '${this.identifier}'`);
        }
    }

    export class ContentItemIdentifier {
        constructor(public identifier: ContentItemIdentifierEnum, public value: string) {}

        getParamValue(): string {
            if (this.identifier === ContentItemIdentifierEnum.Codename) {
                return `codename/${this.value}`;
            }
            if (this.identifier === ContentItemIdentifierEnum.InternalId) {
                return `${this.value}`;
            }
            if (this.identifier === ContentItemIdentifierEnum.ExternalId) {
                return `external-id/${this.value}`;
            }
            throw Error(`Unsupported identifier '${this.identifier}'`);
        }
    }

    export class LanguageIdentifier {
        constructor(public identifier: LanguageIdentifierEnum, public value: string) {}

        getParamValue(): string {
            if (this.identifier === LanguageIdentifierEnum.Codename) {
                return `codename/${this.value}`;
            }

            if (this.identifier === LanguageIdentifierEnum.InternalId) {
                return `${this.value}`;
            }
            if (this.identifier === LanguageIdentifierEnum.ExternalId) {
                return `external-id/${this.value}`;
            }
            throw Error(`Unsupported identifier '${this.identifier}'`);
        }
    }

    export class WebhookIdentifier {
        constructor(public identifier: WebhookIdentifierEnum, public value: string) {}

        getParamValue(): string {
            if (this.identifier === WebhookIdentifierEnum.Id) {
                return `${this.value}`;
            }
            throw Error(`Unsupported identifier '${this.identifier}'`);
        }
    }

    export class ProjectIdentifier {
        constructor(public identifier: ProjectIdentifierEnum, public value: string) {}

        getParamValue(): string {
            if (this.identifier === ProjectIdentifierEnum.Id) {
                return `${this.value}`;
            }
            throw Error(`Unsupported identifier '${this.identifier}'`);
        }
    }

    export class UserIdentifier {
        constructor(public identifier: UserIdentifierEnum, public value: string) {}

        getParamValue(): string {
            if (this.identifier === UserIdentifierEnum.Id) {
                return `${this.value}`;
            }
            if (this.identifier === UserIdentifierEnum.Email) {
                return `email/${this.value}`;
            }
            throw Error(`Unsupported identifier '${this.identifier}'`);
        }
    }

    export class RoleIdentifier {
        constructor(public identifier: RoleIdentifierEnum, public value: string) {}

        getParamValue(): string {
            if (this.identifier === RoleIdentifierEnum.Id) {
                return `${this.value}`;
            }
            if (this.identifier === RoleIdentifierEnum.Codename) {
                return `codename/${this.value}`;
            }
            throw Error(`Unsupported identifier '${this.identifier}'`);
        }
    }
    
    export class SpaceIdentifier {
        constructor(public identifier: SpaceIdentifierEnum, public value: string) {}

        getParamValue(): string {
            if (this.identifier === SpaceIdentifierEnum.Codename) {
                return `codename/${this.value}`;
            }
            if (this.identifier === SpaceIdentifierEnum.InternalId) {
                return `${this.value}`;
            }
            if (this.identifier === SpaceIdentifierEnum.ExternalId) {
                return `external-id/${this.value}`;
            }
            throw Error(`Unsupported identifier '${this.identifier}'`);
        }
    }

}
