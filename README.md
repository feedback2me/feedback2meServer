# README

Feedback2me Server

This project brings teachers (masters) and students (juniors) together so that students can get feedback on the topics that they want to improve themselves. This platform enables students to upload their materials (video, voice record, text (essay), code) and get feedback online. Teachers are able to choose what they want to evaluate and give feedback by putting remarks on the materials or editing and re-uploading the corrected versions of them.

## Dependencies and dev-dependencies

-   Yarn for development environment and package management.
-   Nodejs
-   express
-   compression -> compress response bodies for all request that traverse through the middleware
-   helmet -> security middleware including (xssFilter, contentSecurityPolicy, contentSecurityPolicy etc)
-   winston -> logging library

## Run application in development mode

Start application in development mode: From the root folder run following command. Then it will automatically start the project from 8000 port. It will also start listening changes in the code and reload changed files on save.

`yarn start`

## Build application for production

Production build: From the root folder run following command. Then it will create folder named "dist" which includes necessary files.
