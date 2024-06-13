## Vac RFC Website
This repository contains documents that have been discussed and pushed from the [rfc-index](https://github.com/vacp2p/rfc-index) repository.
Pull requests opened in this repository must relate to Vac RFC website updates,
other updates will be closed.

The template repository for docs using [logos-docusaurus-plugins](https://github.com/acid-info/logos-docusaurus-plugins).

## How to Run Locally

1. Clone this repository
```bash
$ git clone https://github.com/acid-info/logos-docs-template.git
```

2. Install the dependencies:
```bash
$ yarn install
```

3. Create .env and run the scraping script
and 
```bash
$ yarn scrape
```

4. Start the website:

```bash
$ yarn start
```

5. Visit `http://localhost:3000` in your browser


## Configuration
Edit the `docusaurus.config.js` file in the repository's root directory, and update the value of the `businessUnit` field in presets section; below is a list of valid values:
- Logos
- Codex
- Waku
- Nimbus
- Nomos
- VacResearch
- Acid.info

Example:
```js
presets: [
  [
    '@acid-info/logos-docusaurus-preset',
    {
      businessUnit: 'Codex',
    },
  ],
],
```

This is typically sufficient for most cases, as the Logos plugins will automatically populate other configurations related to the specified business unit. If you encounter any errors in the information provided by Logos Plugins, please visit the [Logos Docusaurus Plugins](https://github.com/acid-info/logos-docusaurus-plugins) repository and open an issue.


## Docs Setup

This template does not include a landing page. Please review the `routeBasePath: '/'` setting in the `docusaurus.config.js` file.

```js
presets: [
    [
      '@acid-info/logos-docusaurus-preset',
      /** @type {import('@acid-info/logos-docusaurus-preset').PluginOptions} */
      ({
        businessUnit: 'Codex',
        theme: {
          name: 'default',
          options: {
            customCss: [require.resolve('./src/css/custom.scss')],
            docs: {
              default: {
                sidebar: {
                  hide: false,
                },
              },
            },
          },
        },
        docs: {
          routeBasePath: '/', // the index.md becomes the index page
        },
        og: {},
      }),
    ]
]
```

The content in `docs/index.md` will serve as the root page for your documentation.

For additional customization options, please refer to the [Docusaurus Configuration](https://docusaurus.io/docs/configuration).


## Adding docs

To add a document, create a `.md` or `mdx` file within the `docs` directory. You can use [Frontmatter](https://docusaurus.io/docs/markdown-features#front-matter) to add metadata to your markdown file.


## Docusaurus Config

You can find instructions for adding additional documentation sections, implementing localization, and managing versioning on the [Docusaurus](https://docusaurus.io/docs) website.

> Please note that theme customization is somewhat restricted; for more detailed instructions on customizing your theme, visit the [Logos Docusaurus Theme](https://github.com/acid-info/logos-docusaurus-plugins/tree/main/packages/logos-docusaurus-theme/) repository.


## Custom CSS

By default, this template utilizes the CSS styles defined in the [logos-docusaurus-plugins](https://github.com/acid-info/logos-docusaurus-plugins/tree/main/packages/logos-docusaurus-theme/src/client/css) package. You have the option to define custom CSS in `src/css/custom.scss`.


## How to Run a Static Build (Production Build)

1. Generate static files for production:

```bash
$ yarn build
```

The static files will be created in the `build` directory.

2. Serve the static build:

```bash
$ yarn serve
```

## CI/CD

- [CI builds](https://ci.infra.status.im/job/website/job/rfc.vac.dev/) `master` and pushes to `deploy-master` branch, which is hosted at <https://rfc.vac.dev/>.
- [CI builds](https://ci.infra.status.im/job/website/job/dev-rfc.vac.dev/) `develop` and pushes to `deploy-develop` branch, which is hosted at <https://dev-rfc.vac.dev/>.

The hosting is done using [Caddy server with Git plugin for handling GitHub webhooks](https://github.com/status-im/infra-misc/blob/master/ansible/roles/caddy-git).

Information about deployed build can be also found in `/build.json` available on the website.

## Change Process

1. Create a new working branch from `develop`: `git checkout develop; git checkout -b my-changes`.
2. Make your changes, push them to the `origin`, and open a Pull Request against the `develop` branch.
3. After approval, merge the pull request, and verify the changes on the staging server (e.g., https://dev.vac.dev).
4. When ready to promote changes to the live website, rebase the `master` branch on the staging changes: `git checkout master; git pull origin master; git rebase origin/develop; git push`.
