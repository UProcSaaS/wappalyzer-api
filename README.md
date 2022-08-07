# wappalyzer-api

Simple wrap of [Wappalyzer](https://github.com/AliasIO/Wappalyzer) to use instead of wappalyzer API.

> WARNING!!! Use [Wappalyzer](https://github.com/AliasIO/Wappalyzer) API in production, this image is only for development purposes.

API loosely mimics Wappalyzer API with a single endpoint `extract`

## Lookup API

Look up a domain with Wappalyzer.

### Resource URI

```
extract
```

### Resource information

|                 |                                                          |
| --------------- | --------------------------------------------------------:|
| Method          | GET                                                      |
| Execution       | Synchronous / Asynchronous (when call yields no results) |
| Response format | JSON                                                     |

### Resource parameters

| NAME          | REQUIRED      | DESCRIPTION                    | EXAMPLE             |
| ------------- |:-------------:|:------------------------------:| -------------------:|
| url           | Yes           | URL of the web page to analyze | https://uproc.io |

### Example request

```
GET http://localhost:3000/extract/?url=https://uproc.io
```

### Example response

```json
{
    "error": "",
    "results": {
        "technologies": [
            {
                "categories": [
                    {
                        "id": 12,
                        "name": "JavaScript frameworks",
                        "slug": "javascript-frameworks"
                    }
                ],
                "confidence": 100,
                "cpe": null,
                "description": "Vue.js is an open-source model\u2013view\u2013viewmodel JavaScript framework for building user interfaces and single-page applications.",
                "icon": "vue.svg",
                "name": "Vue.js",
                "slug": "vue-js",
                "version": null,
                "website": "https://vuejs.org"
            },
            {
                "categories": [
                    {
                        "id": 22,
                        "name": "Web servers",
                        "slug": "web-servers"
                    }
                ],
                "confidence": 100,
                "cpe": "cpe:/a:apache:http_server",
                "description": "Apache is a free and open-source cross-platform web server software.",
                "icon": "Apache.svg",
                "name": "Apache",
                "slug": "apache",
                "version": null,
                "website": "http://apache.org"
            },
            {
                "categories": [
                    {
                        "id": 32,
                        "name": "Marketing automation",
                        "slug": "marketing-automation"
                    },
                    {
                        "id": 74,
                        "name": "A/B Testing",
                        "slug": "a-b-testing"
                    }
                ],
                "confidence": 100,
                "cpe": null,
                "description": "OneSignal is a customer engagement messaging solution.",
                "icon": "OneSignal.svg",
                "name": "OneSignal",
                "slug": "onesignal",
                "version": null,
                "website": "https://onesignal.com"
            },
            {
                "categories": [
                    {
                        "id": 10,
                        "name": "Analytics",
                        "slug": "analytics"
                    }
                ],
                "confidence": 100,
                "cpe": null,
                "description": "Hotjar is a suite of analytic tools to assist in the gathering of qualitative data, providing feedback through tools such as heatmaps, session recordings, and surveys.",
                "icon": "Hotjar.svg",
                "name": "Hotjar",
                "slug": "hotjar",
                "version": null,
                "website": "https://www.hotjar.com"
            },
            {
                "categories": [
                    {
                        "id": 10,
                        "name": "Analytics",
                        "slug": "analytics"
                    }
                ],
                "confidence": 100,
                "cpe": null,
                "description": "Google Analytics is a free web analytics service that tracks and reports website traffic.",
                "icon": "Google Analytics.svg",
                "name": "Google Analytics",
                "slug": "google-analytics",
                "version": null,
                "website": "http://google.com/analytics"
            },
            {
                "categories": [
                    {
                        "id": 17,
                        "name": "Font scripts",
                        "slug": "font-scripts"
                    }
                ],
                "confidence": 100,
                "cpe": null,
                "description": "Font Awesome is a font and icon toolkit based on CSS and Less.",
                "icon": "font-awesome.svg",
                "name": "Font Awesome",
                "slug": "font-awesome",
                "version": null,
                "website": "https://fontawesome.com/"
            },
            {
                "categories": [
                    {
                        "id": 52,
                        "name": "Live chat",
                        "slug": "live-chat"
                    }
                ],
                "confidence": 100,
                "cpe": null,
                "description": "Drift is a conversational marketing platform.",
                "icon": "Drift.svg",
                "name": "Drift",
                "slug": "drift",
                "version": null,
                "website": "https://www.drift.com/"
            },
            {
                "categories": [
                    {
                        "id": 59,
                        "name": "JavaScript libraries",
                        "slug": "javascript-libraries"
                    }
                ],
                "confidence": 100,
                "cpe": null,
                "description": "core-js is a modular standard library for JavaScript, with polyfills for cutting-edge ECMAScript features.",
                "icon": "core-js.png",
                "name": "core-js",
                "slug": "core-js",
                "version": "3.6.5",
                "website": "https://github.com/zloirock/core-js"
            },
            {
                "categories": [
                    {
                        "id": 30,
                        "name": "Webmail",
                        "slug": "webmail"
                    },
                    {
                        "id": 75,
                        "name": "Email",
                        "slug": "email"
                    }
                ],
                "confidence": 100,
                "cpe": null,
                "description": "Google Workspace, formerly G Suite, is a collection of cloud computing, productivity and collaboration tools.",
                "icon": "Google Workspace.svg",
                "name": "Google Workspace",
                "slug": "google-workspace",
                "version": null,
                "website": "https://workspace.google.com/"
            },
            {
                "categories": [
                    {
                        "id": 19,
                        "name": "Miscellaneous",
                        "slug": "miscellaneous"
                    }
                ],
                "confidence": 100,
                "cpe": null,
                "description": "Webpack is an open-source JavaScript module bundler.",
                "icon": "webpack.svg",
                "name": "webpack",
                "slug": "webpack",
                "version": null,
                "website": "https://webpack.js.org/"
            },
            {
                "categories": [
                    {
                        "id": 19,
                        "name": "Miscellaneous",
                        "slug": "miscellaneous"
                    }
                ],
                "confidence": 100,
                "cpe": null,
                "description": "Progressive Web Apps (PWAs) are web apps built and enhanced with modern APIs to deliver enhanced capabilities, reliability, and installability while reaching anyone, anywhere, on any device, all with a single codebase.",
                "icon": "PWA.svg",
                "name": "PWA",
                "slug": "pwa",
                "version": null,
                "website": "https://web.dev/progressive-web-apps/"
            }
        ],
        "urls": {
            "https://uproc.io/": {
                "status": 200
            }
        }
    }
}

```
