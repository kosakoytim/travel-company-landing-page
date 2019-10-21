# Travel Company Landing Page

> A Template

### Change Data
> Go to store/index.js
> Change according to the requirements

### Change Global Color
> Go to assets/global.sass
> Change the color hex (primary,secondary,primary-color-dark,primary-color-dark2)

## Run in local browser for development (npm run dev)
Changes made in code will immediately run in browser

## Run in local browser for pre-production (npm run build && npm run start)
Sometimes production build is different with development build, test by using these cmd

## Static Page Deployment (npm run deploy-static)

``` bash
# Or run this manually ~
# Generate all the route in pages folder (not including dynamic pages)
$ npm run generate

# Because it is static and no need for server, deploy hosting only..
$ firebase deploy --only hosting

```

## Server Side Render Deployment (npm run deploy-ssr)

``` bash
# Or run this manually ~
# Build all the needed files to construct server side process and client process
$ npm run build

# Deploy the firebase functions, and hosting
$ firebase deploy
```

## Full Single Page App Deployment [Coming Soon Maybe]

``` bash
# Coming soon maybe ~

```

