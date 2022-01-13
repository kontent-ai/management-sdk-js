import { createManagementClient, ManagementClient } from '../../../lib';
import { IResponse, TestHttpService } from '@kentico/kontent-core';

export const testProjectId: string = 'projectId';
export const testSubscriptionId: string = 'subscriptionId';

export const testApiKey: string = 'managementTestApiKey';

export function useLiveTesting(): boolean {
    if (testApiKey) {
        return true;
    }
    return false;
}

export const cmLiveClient: ManagementClient = createManagementClient({
    projectId: testProjectId,
    subscriptionId: testSubscriptionId,
    apiKey: testApiKey
});

export const getTestManagementClient = (projectId: string, apiKey: string) =>
    createManagementClient({
        apiKey: apiKey,
        projectId: projectId
    });

export const cmTestClientWithInvalidApiKey: ManagementClient = createManagementClient({
    projectId: testProjectId,
    subscriptionId: testSubscriptionId,
    apiKey: testApiKey
});

export const getTestClientWithBaseKontentError: (errorJson: any) => ManagementClient = (errorJson: any) =>
    createManagementClient({
        projectId: testProjectId,
        apiKey: testApiKey,
        httpService: new TestHttpService({
            response: undefined,
            error: {
                isAxiosError: true,
                response: {
                    data: errorJson
                }
            }
        })
    });

export const getTestClientWithJson: (json: any) => ManagementClient = (json: any) =>
    createManagementClient({
        projectId: testProjectId,
        subscriptionId: testSubscriptionId,
        apiKey: testApiKey,
        httpService: new TestHttpService({
            response: getResponseFromJson(json),
            error: undefined
        })
    });

function getResponseFromJson(json: any): IResponse<any> {
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
