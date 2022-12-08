"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.contentTypeElementsBuilder = exports.ContentTypeElementsBuilder = void 0;
var content_type_snippet_elements_builder_1 = require("../content-type-snippets/content-type-snippet-elements.builder");
var ContentTypeElementsBuilder = /** @class */ (function (_super) {
    __extends(ContentTypeElementsBuilder, _super);
    function ContentTypeElementsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentTypeElementsBuilder.prototype.urlSlugElement = function (element) {
        return element;
    };
    ContentTypeElementsBuilder.prototype.snippetElement = function (element) {
        return element;
    };
    return ContentTypeElementsBuilder;
}(content_type_snippet_elements_builder_1.ContentTypeSnippetElements));
exports.ContentTypeElementsBuilder = ContentTypeElementsBuilder;
exports.contentTypeElementsBuilder = new ContentTypeElementsBuilder();
