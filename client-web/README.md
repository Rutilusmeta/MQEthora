# MQ Ethora Superapp - React.js client

## Prerequisites

```yaml
node.js: ^18.20.4
npm: 10.7.0

# yarn is preferred
yarn: 1.22.22
```

## Getting Started

```bash
$ yarn install
```

> ⚠️ `npm install` won't do it - make sure to use `yarn`

### Configure `.env` file

There should be `.env.example` (`.env.backup`) in the project folder, just copy it to `.env` and edit the endpoints if needed.

```yaml
# production
############
# REACT_APP_PRODUCTION_MODE=true

# development
#############
VITE_APP_API_URL=
VITE_APP_DISABLE_STRICT=true
VITE_APP_DOMAIN_NAME=
VITE_APP_XMPP_BASEDOMAIN=
```

![CleanShot 2024-03-06 at 17 54 09@2x](https://github.com/dappros/ethora/assets/328787/ac8e9c07-1e00-4937-9c73-f11785f2d6d9)

### Launch locally

```bash
# vite
$ npm start

# vite --host
$ npm run dev

# or
$ yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in the browser. You should see something like this:

![CleanShot 2024-03-06 at 17 57 26@2x](https://github.com/dappros/ethora/assets/328787/c345f3f6-4f66-4547-8ad7-dc573f6190b1)

### Other stuff

`npm run build` builds the app for production to the **build** folder.
