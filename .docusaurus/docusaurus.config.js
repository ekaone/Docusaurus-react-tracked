export default {
  "title": "React Tracked",
  "tagline": "Simple and fast global state with React Context. Eliminate unnecessary re-renders without hassle.",
  "organizationName": "dai-shi",
  "projectName": "react-tracked",
  "baseUrl": "/",
  "url": "https://react-tracked.js.org",
  "favicon": "img/favicon.ico",
  "themes": [
    "@docusaurus/theme-live-codeblock"
  ],
  "plugins": [],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "docs",
          "sidebarPath": "E:\\react-tracked-webiste\\sidebars.js",
          "remarkPlugins": [
            null
          ]
        }
      }
    ]
  ],
  "themeConfig": {
    "image": "img/react-tracked-logo.png",
    "navbar": {
      "title": "React Tracked",
      "logo": {
        "alt": "React Tracked Logo",
        "src": "img/react-tracked-logo.svg"
      },
      "items": [
        {
          "to": "docs/introduction",
          "label": "Getting Started",
          "position": "left"
        },
        {
          "to": "docs/tutorial-01",
          "label": "Tutorial",
          "position": "left"
        },
        {
          "to": "docs/api",
          "label": "Reference",
          "position": "left"
        },
        {
          "href": "https://github.com/dai-shi/react-tracked",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Getting Started",
              "to": "docs/introduction"
            },
            {
              "label": "Tutorial",
              "to": "docs/tutorial-01"
            },
            {
              "label": "Reference",
              "to": "docs/api"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Discord",
              "href": "https://discord.gg/MrQdmzd"
            }
          ]
        },
        {
          "title": "Social",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/dai-shi/react-tracked"
            },
            {
              "label": "NPM",
              "href": "https://www.npmjs.com/package/react-tracked"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/dai_shi"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2019-2020 Daishi Kato"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "titleDelimiter": "|",
  "noIndex": false
};