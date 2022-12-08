"use strict";
exports.__esModule = true;
exports.Identifiers = void 0;
var Identifiers;
(function (Identifiers) {
    var TaskIdentifierEnum;
    (function (TaskIdentifierEnum) {
        TaskIdentifierEnum["InternalId"] = "internalId";
    })(TaskIdentifierEnum = Identifiers.TaskIdentifierEnum || (Identifiers.TaskIdentifierEnum = {}));
    var ContentItemIdentifierEnum;
    (function (ContentItemIdentifierEnum) {
        ContentItemIdentifierEnum["ExternalId"] = "externalId";
        ContentItemIdentifierEnum["InternalId"] = "internalId";
        ContentItemIdentifierEnum["Codename"] = "codename";
    })(ContentItemIdentifierEnum = Identifiers.ContentItemIdentifierEnum || (Identifiers.ContentItemIdentifierEnum = {}));
    var ContentTypeIdentifierEnum;
    (function (ContentTypeIdentifierEnum) {
        ContentTypeIdentifierEnum["ExternalId"] = "externalId";
        ContentTypeIdentifierEnum["InternalId"] = "internalId";
        ContentTypeIdentifierEnum["Codename"] = "codename";
    })(ContentTypeIdentifierEnum = Identifiers.ContentTypeIdentifierEnum || (Identifiers.ContentTypeIdentifierEnum = {}));
    var RenditionIdentifierEnum;
    (function (RenditionIdentifierEnum) {
        RenditionIdentifierEnum["ExternalId"] = "externalId";
        RenditionIdentifierEnum["InternalId"] = "internalId";
    })(RenditionIdentifierEnum = Identifiers.RenditionIdentifierEnum || (Identifiers.RenditionIdentifierEnum = {}));
    var CollectionIdentifierEnum;
    (function (CollectionIdentifierEnum) {
        CollectionIdentifierEnum["ExternalId"] = "externalId";
        CollectionIdentifierEnum["InternalId"] = "internalId";
        CollectionIdentifierEnum["Codename"] = "codename";
    })(CollectionIdentifierEnum = Identifiers.CollectionIdentifierEnum || (Identifiers.CollectionIdentifierEnum = {}));
    var LanguageIdentifierEnum;
    (function (LanguageIdentifierEnum) {
        LanguageIdentifierEnum["InternalId"] = "internalId";
        LanguageIdentifierEnum["Codename"] = "codename";
        LanguageIdentifierEnum["ExternalId"] = "externalId";
    })(LanguageIdentifierEnum = Identifiers.LanguageIdentifierEnum || (Identifiers.LanguageIdentifierEnum = {}));
    var WorkflowIdentifierEnum;
    (function (WorkflowIdentifierEnum) {
        WorkflowIdentifierEnum["Id"] = "id";
        WorkflowIdentifierEnum["Codename"] = "codename";
    })(WorkflowIdentifierEnum = Identifiers.WorkflowIdentifierEnum || (Identifiers.WorkflowIdentifierEnum = {}));
    var TaxonomyIdentifierEnum;
    (function (TaxonomyIdentifierEnum) {
        TaxonomyIdentifierEnum["InternalId"] = "internalId";
        TaxonomyIdentifierEnum["ExternalId"] = "externalId";
        TaxonomyIdentifierEnum["Codename"] = "codename";
    })(TaxonomyIdentifierEnum = Identifiers.TaxonomyIdentifierEnum || (Identifiers.TaxonomyIdentifierEnum = {}));
    var AssetIdentifierEnum;
    (function (AssetIdentifierEnum) {
        AssetIdentifierEnum["InternalId"] = "internalId";
        AssetIdentifierEnum["ExternalId"] = "externalId";
    })(AssetIdentifierEnum = Identifiers.AssetIdentifierEnum || (Identifiers.AssetIdentifierEnum = {}));
    var WebhookIdentifierEnum;
    (function (WebhookIdentifierEnum) {
        WebhookIdentifierEnum["Id"] = "id";
    })(WebhookIdentifierEnum = Identifiers.WebhookIdentifierEnum || (Identifiers.WebhookIdentifierEnum = {}));
    var ProjectIdentifierEnum;
    (function (ProjectIdentifierEnum) {
        ProjectIdentifierEnum["Id"] = "id";
    })(ProjectIdentifierEnum = Identifiers.ProjectIdentifierEnum || (Identifiers.ProjectIdentifierEnum = {}));
    var UserIdentifierEnum;
    (function (UserIdentifierEnum) {
        UserIdentifierEnum["Id"] = "id";
        UserIdentifierEnum["Email"] = "email";
    })(UserIdentifierEnum = Identifiers.UserIdentifierEnum || (Identifiers.UserIdentifierEnum = {}));
    var RoleIdentifierEnum;
    (function (RoleIdentifierEnum) {
        RoleIdentifierEnum["Id"] = "id";
        RoleIdentifierEnum["Codename"] = "codename";
    })(RoleIdentifierEnum = Identifiers.RoleIdentifierEnum || (Identifiers.RoleIdentifierEnum = {}));
    var AssetIdentifier = /** @class */ (function () {
        function AssetIdentifier(identifier, value) {
            this.identifier = identifier;
            this.value = value;
        }
        AssetIdentifier.prototype.getParamValue = function () {
            if (this.identifier === AssetIdentifierEnum.InternalId) {
                return "".concat(this.value);
            }
            if (this.identifier === AssetIdentifierEnum.ExternalId) {
                return "external-id/".concat(this.value);
            }
            throw Error("Unsupported identifier '".concat(this.identifier, "'"));
        };
        return AssetIdentifier;
    }());
    Identifiers.AssetIdentifier = AssetIdentifier;
    var TaxonomyIdentifier = /** @class */ (function () {
        function TaxonomyIdentifier(identifier, value) {
            this.identifier = identifier;
            this.value = value;
        }
        TaxonomyIdentifier.prototype.getParamValue = function () {
            if (this.identifier === TaxonomyIdentifierEnum.InternalId) {
                return "".concat(this.value);
            }
            if (this.identifier === TaxonomyIdentifierEnum.ExternalId) {
                return "external-id/".concat(this.value);
            }
            if (this.identifier === TaxonomyIdentifierEnum.Codename) {
                return "codename/".concat(this.value);
            }
            throw Error("Unsupported identifier '".concat(this.identifier, "'"));
        };
        return TaxonomyIdentifier;
    }());
    Identifiers.TaxonomyIdentifier = TaxonomyIdentifier;
    var ContentTypeIdentifier = /** @class */ (function () {
        function ContentTypeIdentifier(identifier, value) {
            this.identifier = identifier;
            this.value = value;
        }
        ContentTypeIdentifier.prototype.getParamValue = function () {
            if (this.identifier === ContentTypeIdentifierEnum.Codename) {
                return "codename/".concat(this.value);
            }
            if (this.identifier === ContentTypeIdentifierEnum.InternalId) {
                return "".concat(this.value);
            }
            if (this.identifier === ContentTypeIdentifierEnum.ExternalId) {
                return "external-id/".concat(this.value);
            }
            throw Error("Unsupported identifier '".concat(this.identifier, "'"));
        };
        return ContentTypeIdentifier;
    }());
    Identifiers.ContentTypeIdentifier = ContentTypeIdentifier;
    var RenditionIdentifier = /** @class */ (function () {
        function RenditionIdentifier(identifier, value) {
            this.identifier = identifier;
            this.value = value;
        }
        RenditionIdentifier.prototype.getParamValue = function () {
            if (this.identifier === RenditionIdentifierEnum.InternalId) {
                return "".concat(this.value);
            }
            if (this.identifier === RenditionIdentifierEnum.ExternalId) {
                return "external-id/".concat(this.value);
            }
            throw Error("Unsupported identifier '".concat(this.identifier, "'"));
        };
        return RenditionIdentifier;
    }());
    Identifiers.RenditionIdentifier = RenditionIdentifier;
    var CollectionIdentifier = /** @class */ (function () {
        function CollectionIdentifier(identifier, value) {
            this.identifier = identifier;
            this.value = value;
        }
        CollectionIdentifier.prototype.getParamValue = function () {
            if (this.identifier === CollectionIdentifierEnum.Codename) {
                return "codename/".concat(this.value);
            }
            if (this.identifier === CollectionIdentifierEnum.InternalId) {
                return "".concat(this.value);
            }
            if (this.identifier === CollectionIdentifierEnum.ExternalId) {
                return "external-id/".concat(this.value);
            }
            throw Error("Unsupported identifier '".concat(this.identifier, "'"));
        };
        return CollectionIdentifier;
    }());
    Identifiers.CollectionIdentifier = CollectionIdentifier;
    var WorkflowIdentifier = /** @class */ (function () {
        function WorkflowIdentifier(identifier, value) {
            this.identifier = identifier;
            this.value = value;
        }
        WorkflowIdentifier.prototype.getParamValue = function () {
            if (this.identifier === WorkflowIdentifierEnum.Id) {
                return "".concat(this.value);
            }
            if (this.identifier === WorkflowIdentifierEnum.Codename) {
                return "codename/".concat(this.value);
            }
            throw Error("Unsupported identifier '".concat(this.identifier, "'"));
        };
        return WorkflowIdentifier;
    }());
    Identifiers.WorkflowIdentifier = WorkflowIdentifier;
    var TaskIdentifier = /** @class */ (function () {
        function TaskIdentifier(identifier, value) {
            this.identifier = identifier;
            this.value = value;
        }
        TaskIdentifier.prototype.getParamValue = function () {
            if (this.identifier === TaskIdentifierEnum.InternalId) {
                return "".concat(this.value);
            }
            throw Error("Unsupported identifier '".concat(this.identifier, "'"));
        };
        return TaskIdentifier;
    }());
    Identifiers.TaskIdentifier = TaskIdentifier;
    var ContentItemIdentifier = /** @class */ (function () {
        function ContentItemIdentifier(identifier, value) {
            this.identifier = identifier;
            this.value = value;
        }
        ContentItemIdentifier.prototype.getParamValue = function () {
            if (this.identifier === ContentItemIdentifierEnum.Codename) {
                return "codename/".concat(this.value);
            }
            if (this.identifier === ContentItemIdentifierEnum.InternalId) {
                return "".concat(this.value);
            }
            if (this.identifier === ContentItemIdentifierEnum.ExternalId) {
                return "external-id/".concat(this.value);
            }
            throw Error("Unsupported identifier '".concat(this.identifier, "'"));
        };
        return ContentItemIdentifier;
    }());
    Identifiers.ContentItemIdentifier = ContentItemIdentifier;
    var LanguageIdentifier = /** @class */ (function () {
        function LanguageIdentifier(identifier, value) {
            this.identifier = identifier;
            this.value = value;
        }
        LanguageIdentifier.prototype.getParamValue = function () {
            if (this.identifier === LanguageIdentifierEnum.Codename) {
                return "codename/".concat(this.value);
            }
            if (this.identifier === LanguageIdentifierEnum.InternalId) {
                return "".concat(this.value);
            }
            if (this.identifier === LanguageIdentifierEnum.ExternalId) {
                return "external-id/".concat(this.value);
            }
            throw Error("Unsupported identifier '".concat(this.identifier, "'"));
        };
        return LanguageIdentifier;
    }());
    Identifiers.LanguageIdentifier = LanguageIdentifier;
    var WebhookIdentifier = /** @class */ (function () {
        function WebhookIdentifier(identifier, value) {
            this.identifier = identifier;
            this.value = value;
        }
        WebhookIdentifier.prototype.getParamValue = function () {
            if (this.identifier === WebhookIdentifierEnum.Id) {
                return "".concat(this.value);
            }
            throw Error("Unsupported identifier '".concat(this.identifier, "'"));
        };
        return WebhookIdentifier;
    }());
    Identifiers.WebhookIdentifier = WebhookIdentifier;
    var ProjectIdentifier = /** @class */ (function () {
        function ProjectIdentifier(identifier, value) {
            this.identifier = identifier;
            this.value = value;
        }
        ProjectIdentifier.prototype.getParamValue = function () {
            if (this.identifier === ProjectIdentifierEnum.Id) {
                return "".concat(this.value);
            }
            throw Error("Unsupported identifier '".concat(this.identifier, "'"));
        };
        return ProjectIdentifier;
    }());
    Identifiers.ProjectIdentifier = ProjectIdentifier;
    var UserIdentifier = /** @class */ (function () {
        function UserIdentifier(identifier, value) {
            this.identifier = identifier;
            this.value = value;
        }
        UserIdentifier.prototype.getParamValue = function () {
            if (this.identifier === UserIdentifierEnum.Id) {
                return "".concat(this.value);
            }
            if (this.identifier === UserIdentifierEnum.Email) {
                return "email/".concat(this.value);
            }
            throw Error("Unsupported identifier '".concat(this.identifier, "'"));
        };
        return UserIdentifier;
    }());
    Identifiers.UserIdentifier = UserIdentifier;
    var RoleIdentifier = /** @class */ (function () {
        function RoleIdentifier(identifier, value) {
            this.identifier = identifier;
            this.value = value;
        }
        RoleIdentifier.prototype.getParamValue = function () {
            if (this.identifier === RoleIdentifierEnum.Id) {
                return "".concat(this.value);
            }
            if (this.identifier === RoleIdentifierEnum.Codename) {
                return "codename/".concat(this.value);
            }
            throw Error("Unsupported identifier '".concat(this.identifier, "'"));
        };
        return RoleIdentifier;
    }());
    Identifiers.RoleIdentifier = RoleIdentifier;
})(Identifiers = exports.Identifiers || (exports.Identifiers = {}));
