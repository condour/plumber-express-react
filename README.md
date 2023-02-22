# Plumber With React

This is an example project intended to show how React can work together with the R Plumber package.

To build: 

1. Make sure to run `npm install` within the express and client directories.
2. You'll need to set up some environment variables for both the react client and the express server. See below for details.
3. The API can be deployed through an RSConnect instance or a Docker container.
4. The `buildme` script will create production builds of the client and express server, intended for use in aws elastic beanstalk. However, it should work well in any express server.

## Environment variables

For developing in React, we bypass the proxy and just hit the plumber instance directly. To do so, you'll want two env files:

### React .env

`.env` will contain:

```
REACT_APP_API_URL=/proxy
REACT_APP_API_PATH=<PATH TO YOUR PLUMBER API>
```

`.env.development.local` will contain:

```
REACT_APP_API_URL=<YOUR PLUMBER DOMAIN>
REACT_APP_API_KEY=<YOUR KEY HERE>
```

### Express .env

Your Express environment will also need to be set. For this example we use the convenient package dotenv, but these could also be set on the command line or through other methods.

The .env file should contain:

EXPRESS_PLUMBER_API_URL=<YOUR INSTALLATION URL>
EXPRESS_PLUMBER_API_KEY=<YOUR KEY>

## Help!

This is a work in progress, so if you're interested, please try it out and reach out to me. I'm sure it can be improved upon.
