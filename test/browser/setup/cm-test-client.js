"use strict";
exports.__esModule = true;
exports.getTestClientWithJson = exports.getTestClientWithBaseKontentError = exports.cmTestClientWithInvalidApiKey = exports.getTestManagementClient = exports.cmLiveClient = exports.useLiveTesting = exports.testApiKey = exports.testSubscriptionId = exports.testProjectId = void 0;
var lib_1 = require("../../../lib");
var core_sdk_1 = require("@kontent-ai/core-sdk");
exports.testProjectId = 'projectId';
exports.testSubscriptionId = 'subscriptionId';
exports.testApiKey = 'managementTestApiKey';
function useLiveTesting() {
    if (exports.testApiKey) {
        return true;
    }
    return false;
}
exports.useLiveTesting = useLiveTesting;
exports.cmLiveClient = (0, lib_1.createManagementClient)({
    projectId: exports.testProjectId,
    subscriptionId: exports.testSubscriptionId,
    apiKey: exports.testApiKey
});
var getTestManagementClient = function (projectId, apiKey) {
    return (0, lib_1.createManagementClient)({
        apiKey: apiKey,
        projectId: projectId
    });
};
exports.getTestManagementClient = getTestManagementClient;
exports.cmTestClientWithInvalidApiKey = (0, lib_1.createManagementClient)({
    projectId: exports.testProjectId,
    subscriptionId: exports.testSubscriptionId,
    apiKey: exports.testApiKey
});
var getTestClientWithBaseKontentError = function (errorJson) {
    return (0, lib_1.createManagementClient)({
        projectId: exports.testProjectId,
        apiKey: exports.testApiKey,
        httpService: new core_sdk_1.TestHttpService({
            response: undefined,
            error: {
                isAxiosError: true,
                response: {
                    data: errorJson
                }
            }
        })
    });
};
exports.getTestClientWithBaseKontentError = getTestClientWithBaseKontentError;
var getTestClientWithJson = function (json) {
    return (0, lib_1.createManagementClient)({
        projectId: exports.testProjectId,
        subscriptionId: exports.testSubscriptionId,
        apiKey: exports.testApiKey,
        httpService: new core_sdk_1.TestHttpService({
            response: getResponseFromJson(json),
            error: undefined
        })
    });
};
exports.getTestClientWithJson = getTestClientWithJson;
function getResponseFromJson(json) {
    return {
        data: json,
        headers: [],
        rawResponse: json,
        status: 999,
        retryStrategy: {
            retryAttempts: 1,
            options: {}
        }
    };
}
