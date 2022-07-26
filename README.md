# Vercel Plausible Stats API

## What is this?

This API can be used to get total `pageviews` and `visitors` data from the Plausible Stats API safely at client side.

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frenbaoshuo%2Fvercel-plausible-stats-api)

Don't forget to set API Key (`PLAUSIBLE_TOKEN`) and Plausible domain (`PLAUSIBLE_DOMAIN`, if you're using self-hosted version) in environment settings.

## Usage

You can use this API in your client side:

```http
GET /info?site=SITE_ID
```

and it will return the following result in JSON format:

```json
{
    "pageviews": 100000,
    "visitors": 1000
}
```

## Author

**Vercel Plausible Stats API** © [Baoshuo](https://github.com/renbaoshuo), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Baoshuo with help from contributors ([list](https://github.com/renbaoshuo/vercel-plausible-stats-api/graphs/contributors)).

> [Personal Website](https://baoshuo.ren) · [Blog](https://blog.baoshuo.ren) · GitHub [@renbaoshuo](https://github.com/renbaoshuo) · Twitter [@renbaoshuo](https://twitter.com/renbaoshuo)
