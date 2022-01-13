import { ManagementClient } from '../../../lib';
import { IResponse, TestHttpService } from '@kentico/kontent-core';

export const testProjectId: string = 'projectId';
export const testSubscriptionId: string = 'subscriptionId';

export const testManagementApiKey: string = 'managementTestApiKey';
export const testSubscriptionApiKey: string = 'subscriptionTestApiKey';

export function useLiveTesting(): boolean {
    if (testManagementApiKey) {
        return true;
    }
    return false;
}

export const cmLiveClient: ManagementClient = new ManagementClient({
    projectId: testProjectId,
    subscriptionId: testSubscriptionId,
    managementApiKey: testManagementApiKey,
    subscriptionApiKey: testSubscriptionApiKey
});

export const getTestManagementClient = (projectId: string, apiKey: string) =>
    new ManagementClient({
        managementApiKey: apiKey,
        projectId: projectId
    });

export const cmTestClientWithInvalidApiKey: ManagementClient = new ManagementClient({
    projectId: testProjectId,
    subscriptionId: testSubscriptionId,
    managementApiKey: testManagementApiKey,
    subscriptionApiKey: testSubscriptionApiKey
});

export const getTestClientWithBaseKontentError: (errorJson: any) => ManagementClient = (errorJson: any) =>
    new ManagementClient({
        projectId: testProjectId,
        managementApiKey: testManagementApiKey,
        subscriptionApiKey: testSubscriptionApiKey,
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
    new ManagementClient({
        projectId: testProjectId,
        subscriptionId: testSubscriptionId,
        subscriptionApiKey: testSubscriptionApiKey,
        managementApiKey: testManagementApiKey,
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
