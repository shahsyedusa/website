# s37syed-website  
Repository for my website's development


## Docker specific commands  
- `docker build -f Dockerfile -t website:prod-<version-number> .`
   - this will build the docker file and tag it with website:prod<version-number>
- `docker run -it -p 80:80 --rm website:prod-<version-number>`
   - this will run the docker image locally
- `docker tag website:prod-1.0.0 shahdeys/website:1.0.0`
   - this will tag the image to prep it for release
- `docker push shahdeys/website:1.0.0`
   - this will push to docker hub
- `docker run -p 3000:3000 shahdeys/website:1.0.0`
   - command to run on prod server to run container
- docker hub url: `https://hub.docker.com/repository/docker/shahdeys/website/general`

## Software used  
* AngularJS 8.3.29 (TypeScript)  
* HTML5  
* JavaScript  
* CSS3  
* Bootstrap 4  
* jQuery 
* NodeJS 12.18.3

## Install dependencies
`$ npm install`  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## NG specific gotchas
`ng update @angular/cli --migrate-only --from=1.x.x`
 * update version of ng 

## Todo
* ~~Dockerize NodeJS application~~
* Add trivial unit tests
* Update to Angular 10
* Add HTTPS to not make website throw errors when visiting
* Add SoundCloud link to bottom of navbar
* Fix common issues using Google Lighthouse: https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=http://www.shahsyed.com
* Add CI/CD pipeline
* Update proj. dependencies and remove security vulns
* ~~Update to NG 8~~
* ~~Update site from AngularJS 2.0 Beta 7 to Angular (AngularJS 4.0)~~
* ~~Create build scripts for production~~
* Clean up classes
* Fix bug where hotlinking a page should highlight nav menu  
* Add section for music production/hobbies  
* Add blogging system  
* Reorganize file structure and TypeScript classes  
* Add SEO to site
* remove DS store from repo
* ~~Add Contact section/form to create a draft, add form validation/sanitation~~
* Fix bug where clicking projects nav menu and then not selecting anything will still have the button highlighted on projects (even though that page isn't selected)
* Add Spotify profile to footer
* Fix bug where you scroll down and footer is not responsive and there are spacing issues around it
* ~~Validate HTML~~  
* ~~Deploy site (go live!)~~  
* ~~Add page analytics~~  
* ~~Add resume as a pdf or use Mozilla/Google PDF viewer/Resume viewer respectively~~  
* ~~Add animate.css class~~  
* ~~Add intro animation for page~~  
* ~~Make footer static/sticky at bottom of screen~~  
* ~~Add CSS for nav sidebar, add padding for sidebar and content sections~~  
* ~~Add images/logo.svg on navigation section~~  
* ~~Add social media links on front page~~  
* ~~Fix style sheets~~  
* ~~Design Projects display system to either use bootstrap modal or make interactive thumbnails~~  
