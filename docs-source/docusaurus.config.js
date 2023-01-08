// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ActionHub.ai from Lifecycle Science',
  tagline: 'Real-time Engagmenet and Retention Engine',
  url: 'http://actionhub.ai',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico?v=2',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lifecycle-science', // Usually your GitHub org/user name.
  projectName: 're2-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-667JRMC2LT',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi-docs
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "apiDocs",
        docsPluginId: "classic",
        config: {
          actionhub: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
            specPath: "./static/openapi.json", // Path to designated spec file
            outputDir: "docs/api", // Output directory for generated .mdx docs
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },

          }
        },
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"], // Allows use of @theme/ApiItem and other components
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content:
          '<b>ActionHub.ai is in pre-release development. View the product roadmap <a target="_blank" rel="noopener noreferrer" href="https://github.com/orgs/Lifecycle-Science/projects/1/views/1">here</a>. Sign up for updates and early access <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/eTwNcCBrPP4H9JWH8">here</a></b>',
        backgroundColor: '#30B1BF',
        textColor: '#ffffff',
        isCloseable: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'ActionHHub.ai',
          srcDark: 'img/logo-dark-mode.png',
          src: 'img/logo-light-mode.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Features',
          },
          {
            to: 'docs/api/actionhub-ai-api',
            position: 'right',
            label: 'Explore the REST API',
          },
          {
            to: '/pricing',
            position: 'left',
            label: 'Pricing',
          },
          {
            to: '/contact',
            position: 'left',
            label: 'Contact',
          },
          {
            to: '/about',
            position: 'left',
            label: 'About',
          },
          /** {to: '/blog', label: 'Blog', position: 'left'}, */
          // {
          //   href: 'https://api.re2.live/docs',
          //   label: 'Explore the API',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        /*
        logo: {
          alt: 'RE2 Logo',
          src: 'img/logo-light.png',
          href: 'https://docs.re2.live',
        },
        */  
        style: 'dark',
        links: [
          {
            title: 'Features',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              
            ],
          },
          {
            title: 'Integrations',
            items: [
              {
                label: 'Shopify',
                to: '/docs/integrations/re2-shopify-app',
              },
              
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/lifecyclescience',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/lifecyclescience',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About',
                to: '/about',
              },
              {
                label: 'Terms of Use',
                to: '/terms',
              },
              {
                label: 'Privacy Policy',
                to: '/privacy',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/lifecyclescience/re2-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lifecycle Science`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'), // lightCodeTheme,
        darkTheme:  require('prism-react-renderer/themes/dracula'), // lightCodeTheme,
      },
      languageTabs: [
        {
            highlight: "bash",
            language: "curl",
            logoClass: "bash",
        },
        {
            highlight: "python",
            language: "python",
            logoClass: "python",
        },
        {
            highlight: "go",
            language: "go",
            logoClass: "go",
        },
        {
            highlight: "javascript",
            language: "nodejs",
            logoClass: "nodejs",
        },
      ],
    }),
};

module.exports = config;
