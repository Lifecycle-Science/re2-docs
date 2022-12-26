// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RE2 from Lifecycle Science',
  tagline: 'Real-time Engagmenet and Retention Engine',
  url: 'https://lifecyclescience.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

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
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content:
          '<b>RE2 is in pre-release development. View the product roadmap <a target="_blank" rel="noopener noreferrer" href="https://github.com/orgs/Lifecycle-Science/projects/1/views/1">here</a>. Sign up for updates and early access <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/eTwNcCBrPP4H9JWH8">here</a></b>',
        backgroundColor: '#30B1BF',
        textColor: '#ffffff',
        isCloseable: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 're2.live',
          srcDark: 'img/logo-light.png',
          src: 'img/logo-dark.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Product',
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
          {
            href: 'https://api.re2.live/docs',
            label: 'Explore the API',
            position: 'right',
          },
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
            title: 'Product',
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
        defaultMode: 'dark',
        disableSwitch: true
        /* respectPrefersColorScheme: true, */
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'), // lightCodeTheme,
        darkTheme:  require('prism-react-renderer/themes/dracula'), // lightCodeTheme,
      },
    }),
};

module.exports = config;
