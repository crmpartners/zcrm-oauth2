> Please note that this project is currently in **beta** and is not ready for production.

# ZCRM OAuth [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

CLI module built to simplify the the generation of the `access token` and `refresh token` for **Zoho CRM API v2**. 

## Table of contents

- [Installing / Getting started](#installing--getting-started)
- [Usage examples](#usage-examples)
- [Generating the `grant code`](#generating-the-grant-code)
- [Versioning](#versioning)
- [License](#license)

## Installing / Getting started

> This procedure will be edited once the module will be published in the npm registry

In _development_ you can clone this repository and use it with the following commands:

```shell
git clone https://github.com/crmpartners/zcrm-oauth.git
npm install zcrm-oauth/
```

To display all the CLI options:

```shell
node zcrm-oauth -h
```

You can also install the module globally but **this is not recommended** until this project becomes an official
npm module:

```shell
cd zcrm-oauth/
npm install -g
zcrm-oauth [options]
``` 

### Setting up Dev

Everything you need to do is:

```shell
git clone https://github.com/crmpartners/zcrm-oauth
cd zcrm-oauth/
npm install
```

That's it. You can start working on it!

## Usage examples

```shell
Usage: zcrm-oauth [options]

  Options:

    --id <id>              * client-id obtained from the connected app.
    --secret <secret>      * client-secret obtained from the connected app.
    --redirect <redirect>  * Callback URL that you registered. To generate <grant_token> is required "localhost".
    --code <grant_token>   If not present, will be generated. It requires to redirect to "localhost" to make it work.
    --scope <scopes...>    List of scopes separated by ",". Default value is "ZohoCRM.modules.ALL".
    -p, --port <port>      The local server port to generate <grant_toke>. Default value is "8000".
    -f, --file <file>      File containing options parameters.
    -s, --server <server>  Zoho API authentication server. Default value is "eu".
    -o, --output <output>  Output file name.
    -V, --version          output the version number
    -h, --help             output usage information

    * required fields.
```

You can use this tool to generate the `access token` and the `refresh token` if you have already generated your
own `grant code` or not. If the `--code` option (that is the `grant code`) will not be provided, the tool will generate
it for you.

### Generating the `grant code`

Example usage:

```shell
zcrm-oauth --id XXXXX --secret XXXXX --redirect http://localhost:8000/callback 
```

Note:

> If you want to generate the `grant code` with this tools you need to set **http://localhost:[port]/callback** as
redirect URL in you application configuration. The default port is `8000`, but you can set your own value passing
the option `--port`.

Generating the `grant code` using a different port than 8000:

```shell
zcrm-oauth --id XXXXX --secret XXXXX --redirect http://localhost:3333/callback -p 3333
```

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## License

ZCRM OAuth is an open source software [licensed as MIT](https://github.com/crmpartners/zcrm-oauth/blob/master/LICENSE).
