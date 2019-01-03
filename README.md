# kadona
A simple KOA app that responds to a default route, `/`, with json saying, 'Hello World.'

This is a companion demo app that is used in [a series of blog posts](https://medium.com/@mattloseke/deploying-a-koa-app-to-digital-ocean-with-nanobox-1-3-967977fe01bc) demonstrating a way to deploy an app like this to Digital Ocean with Nanobox.

### Install Dependencies
`yarn install`

### Run Tests
`./node_modules/.bin/jest ./__tests__/app_test.js`

### Run App
`node app.js`

Or if you have nanobox installed and wish to run it locally in a container:

`nanobox run`

and then

`node app.js`

### Deploy
A bit more involved, [part 3](https://medium.com/@mattloseke/deploying-a-koa-app-to-digital-ocean-with-nanobox-3-3-7b78ab395f4b) of the series mentioned above details how to configure a hosting provider with Nanobox. Nothing too crazy you just have to step through it. Once you do you can add a remote with:

`nanobox remote add <your-remote-name>`

and then

`nanobox deploy`
