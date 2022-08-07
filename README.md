# wappalyzer-api

Simple wrap of [Wappalyzer](https://github.com/AliasIO/Wappalyzer) to use instead of wappalyzer API.

> WARNING!!! Use [Wappalyzer](https://github.com/AliasIO/Wappalyzer) API in production, this image is only for development purposes.

API loosely mimics Wappalyzer API with a single endpoint `extract`

## Lookup API

Look up an URL in a direct or recursive way with Wappalyzer (6.10.38).

### Resource URI

```
detect
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
GET http://localhost:3000/detect?url=https://uproc.io
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

```
detectRecursive
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
GET http://localhost:3000/detectRecursive?url=https://uproc.io
```

### Example response

```
{
  "error": "",
  "results": {
    "urls": {
      "https://uproc.io/": {
        "status": 200
      },
      "https://uproc.io/blog": {
        "status": 301
      },
      "https://uproc.io/blog/": {
        "status": 200
      },
      "https://uproc.io/blog/es/": {
        "status": 200
      },
      "https://uproc.io/roadmap": {
        "status": 301,
        "error": "net::ERR_BLOCKED_BY_CLIENT at https://uproc.io/roadmap (https://uproc.io/roadmap)"
      },
      "https://uproc.io/pricing": {
        "status": 301
      },
      "https://uproc.io/demo": {
        "status": 301
      },
      "https://uproc.io/blog/en/": {
        "status": 302,
        "error": "Navigation timeout of 5000 ms exceeded (https://uproc.io/blog/)"
      }
    },
    "technologies": [
      {
        "slug": "wordpress",
        "name": "WordPress",
        "description": "WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system.",
        "confidence": 100,
        "version": "5.6.4",
        "icon": "WordPress.svg",
        "website": "https://wordpress.org",
        "cpe": "cpe:/a:wordpress:wordpress",
        "categories": [
          {
            "id": 1,
            "slug": "cms",
            "name": "CMS"
          },
          {
            "id": 11,
            "slug": "blogs",
            "name": "Blogs"
          }
        ]
      },
      {
        "slug": "mysql",
        "name": "MySQL",
        "description": "MySQL is an open-source relational database management system.",
        "confidence": 100,
        "version": null,
        "icon": "MySQL.svg",
        "website": "http://mysql.com",
        "cpe": "cpe:/a:mysql:mysql",
        "categories": [
          {
            "id": 34,
            "slug": "databases",
            "name": "Databases"
          }
        ]
      },
      {
        "slug": "php",
        "name": "PHP",
        "description": "PHP is a general-purpose scripting language used for web development.",
        "confidence": 100,
        "version": null,
        "icon": "PHP.svg",
        "website": "http://php.net",
        "cpe": "cpe:/a:php:php",
        "categories": [
          {
            "id": 27,
            "slug": "programming-languages",
            "name": "Programming languages"
          }
        ]
      },
      {
        "slug": "facebook-login",
        "name": "Facebook Login",
        "description": "Facebook Login is a way for people to create accounts and log into your app across multiple platforms.",
        "confidence": 100,
        "version": null,
        "icon": "Facebook.svg",
        "website": "https://developers.facebook.com/docs/facebook-login/",
        "cpe": null,
        "categories": [
          {
            "id": 69,
            "slug": "authentication",
            "name": "Authentication"
          }
        ]
      },
      {
        "slug": "bootstrap",
        "name": "Bootstrap",
        "description": "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
        "confidence": 100,
        "version": "7",
        "icon": "Bootstrap.svg",
        "website": "https://getbootstrap.com",
        "cpe": "cpe:/a:getbootstrap:bootstrap",
        "categories": [
          {
            "id": 66,
            "slug": "ui-frameworks",
            "name": "UI frameworks"
          }
        ]
      },
      {
        "slug": "divi",
        "name": "Divi",
        "description": "Divi is a WordPress Theme and standalone WordPress plugin from Elegant themes that allows users to build websites using the visual drag-and-drop Divi page builder.",
        "confidence": 100,
        "version": null,
        "icon": "Divi.png",
        "website": "https://www.elegantthemes.com/gallery/divi",
        "cpe": null,
        "categories": [
          {
            "id": 51,
            "slug": "page-builders",
            "name": "Page builders"
          },
          {
            "id": 87,
            "slug": "wordpress-plugins",
            "name": "WordPress plugins"
          }
        ]
      },
      {
        "slug": "addtoany-share-buttons",
        "name": "AddToAny Share Buttons",
        "description": "AddToAny Share Buttons plugin for WordPress increases traffic and engagement by helping people share your posts and pages to any service.",
        "confidence": 100,
        "version": "1.1",
        "icon": "AddToAny.svg",
        "website": "https://github.com/projectestac/wordpress-add-to-any",
        "cpe": null,
        "categories": [
          {
            "id": 87,
            "slug": "wordpress-plugins",
            "name": "WordPress plugins"
          }
        ]
      },
      {
        "slug": "contact-form-7",
        "name": "Contact Form 7",
        "description": "Contact Form 7 is an WordPress plugin which can manage multiple contact forms. The form supports Ajax-powered submitting, CAPTCHA, Akismet spam filtering.",
        "confidence": 100,
        "version": "5.2.2",
        "icon": "Contact Form 7.png",
        "website": "https://contactform7.com",
        "cpe": null,
        "categories": [
          {
            "id": 87,
            "slug": "wordpress-plugins",
            "name": "WordPress plugins"
          }
        ]
      },
      {
        "slug": "yoast-seo",
        "name": "Yoast SEO",
        "description": "Yoast SEO is a search engine optimisation plugin for WordPress and other platforms.",
        "confidence": 100,
        "version": "15.0",
        "icon": "Yoast SEO.png",
        "website": "https://yoast.com/wordpress/plugins/seo/",
        "cpe": null,
        "categories": [
          {
            "id": 54,
            "slug": "seo",
            "name": "SEO"
          },
          {
            "id": 87,
            "slug": "wordpress-plugins",
            "name": "WordPress plugins"
          }
        ]
      },
      {
        "slug": "vue-js",
        "name": "Vue.js",
        "description": "Vue.js is an open-source model–view–viewmodel JavaScript framework for building user interfaces and single-page applications.",
        "confidence": 100,
        "version": null,
        "icon": "vue.svg",
        "website": "https://vuejs.org",
        "cpe": null,
        "categories": [
          {
            "id": 12,
            "slug": "javascript-frameworks",
            "name": "JavaScript frameworks"
          }
        ]
      },
      {
        "slug": "apache",
        "name": "Apache",
        "description": "Apache is a free and open-source cross-platform web server software.",
        "confidence": 100,
        "version": null,
        "icon": "Apache.svg",
        "website": "http://apache.org",
        "cpe": "cpe:/a:apache:http_server",
        "categories": [
          {
            "id": 22,
            "slug": "web-servers",
            "name": "Web servers"
          }
        ]
      },
      {
        "slug": "a3-lazy-load",
        "name": "a3 Lazy Load",
        "description": "a3 Lazy Load is a mobile oriented, very simple to use plugin that will speed up sites page load speed.",
        "confidence": 100,
        "version": "2.4.1",
        "icon": "a3.png",
        "website": "https://a3rev.com/shop/a3-lazy-load/",
        "cpe": null,
        "categories": [
          {
            "id": 87,
            "slug": "wordpress-plugins",
            "name": "WordPress plugins"
          },
          {
            "id": 92,
            "slug": "performance",
            "name": "Performance"
          }
        ]
      },
      {
        "slug": "sharethis",
        "name": "ShareThis",
        "description": "ShareThis provides free engagement and growth tools (e.g., share buttons, follow buttons, and reaction buttons) for site owners.",
        "confidence": 100,
        "version": null,
        "icon": "ShareThis.png",
        "website": "http://sharethis.com",
        "cpe": null,
        "categories": [
          {
            "id": 5,
            "slug": "widgets",
            "name": "Widgets"
          }
        ]
      },
      {
        "slug": "google-hosted-libraries",
        "name": "Google Hosted Libraries",
        "description": "Google Hosted Libraries is a stable, reliable, high-speed, globally available content distribution network for the most popular, open-source JavaScript libraries.",
        "confidence": 100,
        "version": null,
        "icon": "Google Developers.svg",
        "website": "https://developers.google.com/speed/libraries",
        "cpe": null,
        "categories": [
          {
            "id": 31,
            "slug": "cdn",
            "name": "CDN"
          }
        ]
      },
      {
        "slug": "google-font-api",
        "name": "Google Font API",
        "description": "Google Font API is a web service that supports open-source font files that can be used on your web designs.",
        "confidence": 100,
        "version": null,
        "icon": "Google Font API.png",
        "website": "http://google.com/fonts",
        "cpe": null,
        "categories": [
          {
            "id": 17,
            "slug": "font-scripts",
            "name": "Font scripts"
          }
        ]
      },
      {
        "slug": "addtoany",
        "name": "AddToAny",
        "description": "AddToAny is a universal sharing platform that can be integrated into a website by use of a web widget or plugin.",
        "confidence": 100,
        "version": null,
        "icon": "AddToAny.svg",
        "website": "http://www.addtoany.com",
        "cpe": null,
        "categories": [
          {
            "id": 5,
            "slug": "widgets",
            "name": "Widgets"
          }
        ]
      },
      {
        "slug": "jquery-migrate",
        "name": "jQuery Migrate",
        "description": "Query Migrate is a javascript library that allows you to preserve the compatibility of your jQuery code developed for versions of jQuery older than 1.9.",
        "confidence": 100,
        "version": "3.3.2",
        "icon": "jQuery.svg",
        "website": "https://github.com/jquery/jquery-migrate",
        "cpe": null,
        "categories": [
          {
            "id": 59,
            "slug": "javascript-libraries",
            "name": "JavaScript libraries"
          }
        ]
      },
      {
        "slug": "jquery",
        "name": "jQuery",
        "description": "jQuery is a JavaScript library which is a free, open-source software designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.",
        "confidence": 100,
        "version": "1.11.0",
        "icon": "jQuery.svg",
        "website": "https://jquery.com",
        "cpe": "cpe:/a:jquery:jquery",
        "categories": [
          {
            "id": 59,
            "slug": "javascript-libraries",
            "name": "JavaScript libraries"
          }
        ]
      },
      {
        "slug": "facebook-pixel",
        "name": "Facebook Pixel",
        "description": "Facebook pixel is an analytics tool that allows you to measure the effectiveness of your advertising.",
        "confidence": 100,
        "version": "2.9.73",
        "icon": "Facebook.svg",
        "website": "http://facebook.com",
        "cpe": null,
        "categories": [
          {
            "id": 10,
            "slug": "analytics",
            "name": "Analytics"
          }
        ]
      },
      {
        "slug": "cookieyes",
        "name": "CookieYes",
        "confidence": 100,
        "version": "1.9.1",
        "icon": "cookieyes.svg",
        "website": "https://www.cookieyes.com/",
        "cpe": null,
        "categories": [
          {
            "id": 67,
            "slug": "cookie-compliance",
            "name": "Cookie compliance"
          }
        ]
      },
      {
        "slug": "onesignal",
        "name": "OneSignal",
        "description": "OneSignal is a customer engagement messaging solution.",
        "confidence": 100,
        "version": null,
        "icon": "OneSignal.svg",
        "website": "https://onesignal.com",
        "cpe": null,
        "categories": [
          {
            "id": 32,
            "slug": "marketing-automation",
            "name": "Marketing automation"
          },
          {
            "id": 74,
            "slug": "a-b-testing",
            "name": "A/B Testing"
          }
        ]
      },
      {
        "slug": "hotjar",
        "name": "Hotjar",
        "description": "Hotjar is a suite of analytic tools to assist in the gathering of qualitative data, providing feedback through tools such as heatmaps, session recordings, and surveys.",
        "confidence": 100,
        "version": null,
        "icon": "Hotjar.svg",
        "website": "https://www.hotjar.com",
        "cpe": null,
        "categories": [
          {
            "id": 10,
            "slug": "analytics",
            "name": "Analytics"
          }
        ]
      },
      {
        "slug": "google-analytics",
        "name": "Google Analytics",
        "description": "Google Analytics is a free web analytics service that tracks and reports website traffic.",
        "confidence": 100,
        "version": null,
        "icon": "Google Analytics.svg",
        "website": "http://google.com/analytics",
        "cpe": null,
        "categories": [
          {
            "id": 10,
            "slug": "analytics",
            "name": "Analytics"
          }
        ]
      },
      {
        "slug": "font-awesome",
        "name": "Font Awesome",
        "description": "Font Awesome is a font and icon toolkit based on CSS and Less.",
        "confidence": 100,
        "version": null,
        "icon": "font-awesome.svg",
        "website": "https://fontawesome.com/",
        "cpe": null,
        "categories": [
          {
            "id": 17,
            "slug": "font-scripts",
            "name": "Font scripts"
          }
        ]
      },
      {
        "slug": "drift",
        "name": "Drift",
        "description": "Drift is a conversational marketing platform.",
        "confidence": 100,
        "version": null,
        "icon": "Drift.svg",
        "website": "https://www.drift.com/",
        "cpe": null,
        "categories": [
          {
            "id": 52,
            "slug": "live-chat",
            "name": "Live chat"
          }
        ]
      },
      {
        "slug": "core-js",
        "name": "core-js",
        "description": "core-js is a modular standard library for JavaScript, with polyfills for cutting-edge ECMAScript features.",
        "confidence": 100,
        "version": "3.6.5",
        "icon": "core-js.png",
        "website": "https://github.com/zloirock/core-js",
        "cpe": null,
        "categories": [
          {
            "id": 59,
            "slug": "javascript-libraries",
            "name": "JavaScript libraries"
          }
        ]
      },
      {
        "slug": "google-workspace",
        "name": "Google Workspace",
        "description": "Google Workspace, formerly G Suite, is a collection of cloud computing, productivity and collaboration tools.",
        "confidence": 100,
        "version": null,
        "icon": "Google Workspace.svg",
        "website": "https://workspace.google.com/",
        "cpe": null,
        "categories": [
          {
            "id": 30,
            "slug": "webmail",
            "name": "Webmail"
          },
          {
            "id": 75,
            "slug": "email",
            "name": "Email"
          }
        ]
      },
      {
        "slug": "webpack",
        "name": "webpack",
        "description": "Webpack is an open-source JavaScript module bundler.",
        "confidence": 100,
        "version": null,
        "icon": "webpack.svg",
        "website": "https://webpack.js.org/",
        "cpe": null,
        "categories": [
          {
            "id": 19,
            "slug": "miscellaneous",
            "name": "Miscellaneous"
          }
        ]
      },
      {
        "slug": "pwa",
        "name": "PWA",
        "description": "Progressive Web Apps (PWAs) are web apps built and enhanced with modern APIs to deliver enhanced capabilities, reliability, and installability while reaching anyone, anywhere, on any device, all with a single codebase.",
        "confidence": 100,
        "version": null,
        "icon": "PWA.svg",
        "website": "https://web.dev/progressive-web-apps/",
        "cpe": null,
        "categories": [
          {
            "id": 19,
            "slug": "miscellaneous",
            "name": "Miscellaneous"
          }
        ]
      }
    ]
  }
}
```
