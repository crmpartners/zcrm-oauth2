> Please note that this project is currently in **beta** and is not ready for production.

# ZCRM OAuth2 [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

CLI module built to simplify the the generation of the `access token` and `refresh token` for **Zoho CRM API v2**. 

## Table of contents

- [Installing / Getting started](#installing--getting-started)
- [Usage examples](#usage-examples)
- [Generating the `access token` and `refresh token`](#generating-the-access-token-and-refresh-token)
- [Generating the `access token` and `refresh token` without having the `grant code`](#generating-the-access-token-and-refresh-token-without-having-the-grant-code)
- [Using `--file` instead of options](#using---file-instead-of-options)
- [Versioning](#versioning)
- [License](#license)

## Installing / Getting started

> This procedure will be edited once the module will be published in the npm registry

In _development_ you can clone this repository and use it with the following commands:

```shell
git clone https://github.com/crmpartners/zcrm-oauth2.git
npm install zcrm-oauth2/
```

To display all the CLI options:

```shell
node zcrm-oauth2 -h
```

You can also install the module globally but **this is not recommended** until this project becomes an official
npm module:

```shell
cd zcrm-oauth2/
npm install -g
zcrm-oauth2 [options]
``` 

### Setting up Dev

Everything you need to do is:

```shell
git clone https://github.com/crmpartners/zcrm-oauth2
cd zcrm-oauth2/
npm install
```

That's it. You can start working on it!

## Usage examples

```shell
Usage: zcrm-oauth2 [options]

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

### Generating the `access token` and `refresh token`

If you already have generated by yourself the `grant token` you just have to use the options `--code` followed
by your `grant token`.

```shell
zcrm-oauth2 --id XXXXX --secret XXXXX --redirect http://your-redirect --code XXXXX
```

This will generate your tokens.

### Generating the `access token` and `refresh token` without having the `grant code`

Example usage:

```shell
zcrm-oauth2 --id XXXXX --secret XXXXX --redirect http://localhost:8000/callback 
```

Note:

> If you want to generate the `grant code` automatically with this tools you need to set **http://localhost:[port]/callback** 
as redirect URL in you application configuration. The default port is `8000`, but you can set your own value passing
the option `--port`.

Generating the `grant code` using a different port than 8000:

```shell
zcrm-oauth2 --id XXXXX --secret XXXXX --redirect http://localhost:3333/callback -p 3333
```

You can also specify the **scope** of the `grant code` specifying the privileges that the application will need using 
the `--scope` option followed by the list of privileges. 

The default value is `ZohoCRM.modules.ALL` that will grant you full access to the CRM.

If you want, for example, obtain access to the `Leads` and `Accounts` modules only, you will just have to type:

```shell
zcrm-oauth2 --id XXXXX --secret XXXXX --redirect http://localhost:8000/callback --scope ZohoCRM.modules.Leads,ZohoCRM.modules.Accounts
```

### Using `--file` instead of options

The command that you have to type can become pretty long quickly.

For this reason, you can use the option `-f` or `--file` followed by the file name containing all the options that you should
pass as agruments via CLI.

The file must follow the **JSON** syntax.

For example, the following line of execution:

```shell
zcrm-oauth2 --id XXXXX --secret XXXXX --redirect http://localhost:2345 --port 2345 --scope ZohoCRM.modules.Leads,ZohoCRM.modules.Accounts --server com
```

can become:

```shell
zcrm-oauth2 -f ./auth.json
```

and the `./auth.json` file should look like this:

```json
{
    "id": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "secret": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "redirect": "http://localhost:2345",
    "port": "2345",
    "scope": "ZohoCRM.modules.Leads,ZohoCRM.modules.Accounts",
    "server": "com"
}
```

This can help you in keeping your parameters organized and could be easier if you need to edit them.

Note that the keys in the json file are the words without `--` in the options. For example, for `--port` you use `port` 
and so on.      

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## License

ZCRM OAuth2 is an open source software [licensed as MIT](https://github.com/crmpartners/zcrm-oauth2/blob/master/LICENSE).
