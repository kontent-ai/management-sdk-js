"use strict";
exports.__esModule = true;
exports.createManagementClient = void 0;
var management_client_class_1 = require("./management-client.class");
function createManagementClient(config) {
    return new management_client_class_1.ManagementClient(config);
}
exports.createManagementClient = createManagementClient;
