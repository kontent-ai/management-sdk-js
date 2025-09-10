# Kontent.ai Management Javascript SDK

> Javascript SDK for the
> [Management API](https://kontent.ai/learn/reference/kontent-apis-overview/#content-management-api-v2). Helps you manage
> content in your [Kontent.ai](https://kontent.ai/) projects. Supports both `node.js` and `browsers`.

[![npm version](https://badge.fury.io/js/%40kontent-ai%2Fmanagement-sdk.svg)](https://badge.fury.io/js/%40kontent-ai%2Fmanagement-sdk)
[![Build & Test](https://github.com/kontent-ai/management-sdk-js/actions/workflows/integrate.yml/badge.svg)](https://github.com/kontent-ai/management-sdk-js/actions/workflows/integrate.yml)
[![npm](https://img.shields.io/npm/dt/@kontent-ai/management-sdk.svg)](https://www.npmjs.com/package/@kontent-ai/management-sdk)
[![Known Vulnerabilities](https://snyk.io/test/github/kontent-ai/management-sdk-js/badge.svg)](https://snyk.io/test/github/kontent-ai/management-sdk-js)
[![GitHub license](https://img.shields.io/github/license/kontent-ai/management-sdk-js.svg)](https://github.com/kontent-ai/management-sdk-js)
![Gzip bundle](https://img.badgesize.io/https:/cdn.jsdelivr.net/npm/@kontent-ai/management-sdk/dist/bundles/kontent-management.umd.min.js?compression=gzip)
[![](https://data.jsdelivr.com/v1/package/npm/@kontent-ai/management-sdk/badge)](https://www.jsdelivr.com/package/npm/@kontent-ai/management-sdk)

## Getting started

To get started, you'll first need to have access to your [Kontent.ai](https://kontent.ai/) project where you need to enable Content management API and generate `access token` that will be used to authenticate all requests made by this library.

## Installation

```
npm i @kontent-ai/management-sdk --save
```

### Using a standalone version in browsers

If you'd like to use this library directly in browser, place following script tags to your html page. You may of course
download it and refer to local versions of scripts.

```javascript
<script src="https://cdn.jsdelivr.net/npm/@kontent-ai/management-sdk@latest/dist/bundles/kontent-management.umd.js"></script>
```

### Making the first request

The following code example shows how to create new content item in your Kontent.ai environment.

```javascript
import { createManagementClient } from '@kontent-ai/management-sdk';

const client = createManagementClient({
    environmentId: 'xxx', // id of your Kontent.ai environment
    subscriptionId: 'zzz' // optional, but required for Subscription related endpoints
    apiKey: 'yyy' // Content management API token
});

client
    .addContentItem()
    .withData({
        name: 'New article',
        type: {
            codename: 'article' // codename of content type
        }
    })
    .toPromise()
    .then(response => {
        console.log(response);
    });
```

If you are using `UMD` bundles directly in browsers, you can find this library under `KontentManagement` global
variable.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Kontent.ai management | jsdelivr cdn</title>
        <script src="https://cdn.jsdelivr.net/npm/@kontent-ai/management-sdk/dist/bundles/kontent-management.umd.min.js"></script>
    </head>
    <body>
        <script type="text/javascript">
            var KontentManagement = window['kontentManagement'];

            var client = new KontentManagement.ManagementClient({
                environmentId: 'xxx',
                // using CM API key in browser is NOT safe. If you need to use SDK in browsers
                // you should use proxy server and set authorization header there rather than here
                apiKey: 'yyy',
                subscriptionId: 'zzz' // optional, but required for Subscription related endpoints
            });

            client
                .addContentItem()
                .withData({
                    name: 'New article',
                    type: {
                        codename: 'article'
                    }
                })
                .toPromise()
                .then(response => {
                    console.log(response);
                });
        </script>
    </body>
</html>
```

### Configuration

The `ManagementClient` contains several configuration options:

```javascript
import { createManagementClient } from '@kontent-ai/management-sdk';

const client = createManagementClient({
    // configuration options
});
```

| Option          | Default                               | Description                                                                                                                                                         |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `API Key`        | N/A                                   | **Required** - Management or Subscription API Key. Subscription API Key also works for Management requests            |
| `environmentId`     | N/A                                   | **Required for Management API** - Environment Id                                                                                                   
| `subscriptionId`       | N/A  | **Required for Subscription API** - Subscription Id
| `baseUrl`       | https://manage.kontent.ai/v2 | Base URL of REST api. Can be useful if you are using custom proxy or for testing purposes                                                                          
| `retryStrategy` | undefined                             | Retry strategy configuration. If not set, default strategy is used.                                                                                                 |
| `httpService`   | HttpService                           | Used to inject implementation of `IHttpService` used to make HTTP request across network. Can also be useful for testing purposes by returning specified responses. |

### Early access

Some SDK queries are available under the `earlyAccess` namespace. These APIs are experimental and may change without a major version bump. Use with caution in production.

- Access early access features via `client.earlyAccess`
- Endpoints, request/response shapes, and availability may evolve

#### Example: Filter language variants

```typescript
import { createManagementClient } from '@kontent-ai/management-sdk';

const client = createManagementClient({
    environmentId: 'xxx',
    apiKey: 'yyy'
});

const response = await client
    .earlyAccess
    .filterLanguageVariants()
    .withData({
        filters: {
            search_phrase: 'home'
        },
        order: {
            by: 'last_modified',
            direction: 'desc'
        },
        include_content: false
    })
    .toPromise();
```

### Handling API Management Errors

See the [error section in Management API reference](https://kontent.ai/learn/reference/management-api-v2#section/Guidelines-on-handling-changes) for infofmation about status codes and error messages.

```typescript
try {
    const client = createManagementClient({
        environmentId: 'x',
        apiKey: 'y'
    });
    await client.viewContentItem().byItemCodename('invalid codename').toPromise();
} catch (err) {
    if (err instanceof SharedModels.ContentManagementBaseKontentError) {
        // Error message provided by API response and mapped by SDK
        const message = err.message;
        // In case you need more specific information about the request error.
        // Structure of the error depends on HttpService.
        const error = error.originalError;
    } else {
        // handle generic error however you need
    }
}
```

### Cancelling Requests

```typescript
const client = {
    environmentId: 'x',
    apiKey: 'y'
});

// prepare cancel token
const cancelTokenRequest = client.createCancelToken();

client
    .listContentItems()
    .withCancelToken(cancelTokenRequest)
    .toPromise()
    .then((x) => {
        // will not be executed as request was cancelled before network
        // request got a chance to finish
    })
    .catch((err) => {
        // error with your custom message 'Request manually cancelled'
    });

// cancel request right away
cancelTokenRequest.cancel('Request manually cancelled');
```

### Sample scenario

Following is a sample scenario consisting of:

1. Initializing client
2. Getting default language of environment
3. Creating new taxonomy with terms
4. Creating new content type
5. Creating content item
6. Creating binary file & asset from URL
7. Upserting language variant of the newly created content item in default language

#### Initializing client

```typescript 
import { createManagementClient } from '@kontent-ai/management-sdk';

const client = createManagementClient({
    environmentId: 'x',
    apiKey: 'y'
});
```

#### Getting default language of environment

```typescript 
const languages = await client.listLanguages().toPromise();
const defaultLanguage = languages.data.items.find((m) => m.isDefault);
```

####  Creating new taxonomy with terms

```typescript 
const movieTaxonomy = await client
    .addTaxonomy()
    .withData({
        name: 'Genre',
        codename: 'genre',
        terms: [
            {
                name: 'Comedy',
                codename: 'comedy',
                terms: []
            },
            {
                name: 'Action',
                codename: 'action',
                terms: []
            },
            {
                name: 'Anime',
                codename: 'anime',
                terms: []
            }
        ]
    })
    .toPromise();
```

#### Creating new content type

```typescript 
const movieType = await client
    .addContentType()
    .withData((builder) => {
        return {
            name: 'Movie',
            codename: 'movie',
            elements: [
                builder.textElement({
                    name: 'Title',
                    codename: 'title',
                    type: 'text',
                    is_required: true,
                    maximum_text_length: {
                        applies_to: 'characters',
                        value: 50
                    }
                }),
                builder.dateTimeElement({
                    name: 'ReleaseDate',
                    codename: 'release_date',
                    type: 'date_time',
                    is_required: true
                }),
                builder.richTextElement({
                    name: 'Description',
                    codename: 'description',
                    type: 'rich_text',
                    is_required: true,
                    allowed_table_formatting: ['unstyled', 'bold', 'italic'],
                    allowed_blocks: ['text', 'tables'],
                    maximum_text_length: {
                        applies_to: 'words',
                        value: 500
                    }
                }),
                builder.assetElement({
                    name: 'Cover',
                    codename: 'cover',
                    type: 'asset',
                    allowed_file_types: 'adjustable',
                    asset_count_limit: {
                        condition: 'exactly',
                        value: 1
                    },
                    is_required: true
                }),
                builder.taxonomyElement({
                    type: 'taxonomy',
                    codename: 'genre',
                    is_required: true,
                    taxonomy_group: {
                        id: movieTaxonomy.data.id
                    }
                })
            ]
        };
    })
    .toPromise();
```

#### Creating content item

```typescript 
const contentItem = await client
    .addContentItem()
    .withData({
        name: 'Warrior',
        type: {
            codename: 'movie'
        }
    })
    .toPromise();
```

####  Creating binary file & asset from URL

```typescript 
const imageAsset = await client
    .uploadAssetFromUrl()
    .withData({
        asset: {
            descriptions: [{ description: 'Image poster for warrior', language: { id: defaultLanguage?.id ?? '' } }],
            title: 'Warrior cover'
        },
        binaryFile: {
            filename: 'warrior.jpg'
        },
        fileUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e3/Warrior_Poster.jpg'
    })
    .toPromise();
```

#### Upserting language variant of the newly created content item in default language
```typescript 
const languageVariant = await client
    .upsertLanguageVariant()
    .byItemId(contentItem.data.id)
    .byLanguageId(defaultLanguage?.id ?? '')
    .withData((builder) => {
        return {
            elements: [
                builder.textElement({
                    element: {
                        codename: 'title'
                    },
                    value: 'Warrior'
                }),
                builder.dateTimeElement({
                    element: {
                        codename: 'release_date'
                    },
                    value: '2011-09-09'
                }),
                builder.richTextElement({
                    element: {
                        codename: 'description'
                    },
                    value: '<p>Path that puts the fighter on a collision course with his estranged, older brother.</p>'
                }),
                builder.assetElement({
                    element: {
                        codename: 'cover'
                    },
                    value: [
                        {
                            id: imageAsset.data.id
                        }
                    ]
                }),
                builder.taxonomyElement({
                    element: {
                        codename: 'genre'
                    },
                    value: [
                        {
                            codename: 'action'
                        }
                    ]
                })
            ]
        }
    })
    .toPromise();
```

### Testing

> If you want to mock http responses, it is possible to use
> [external implementation of configurable Http Service](../core/README.md#testing) as a part of the
> [client configuration](#configuration).

### Troubleshooting & feedback

If you have any issues or want to share your feedback, please feel free to
[create an issue](https://github.com/kontent-ai/management-sdk-js/issues/new/choose) in this GitHub repository.

### Contributions

Contributions are welcomed. If you have an idea of what you would like to implement, let us know and lets discuss
details of your PR.
