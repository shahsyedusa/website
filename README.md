# shahsyed-website  
Repository for my website's development

## Software used  
* AngularJS 8.3.29 (TypeScript)  
* HTML5  
* JavaScript  
* CSS3  
* Bootstrap 4  
* jQuery 
* NodeJS 12.22.3
* nginx mainline
* Docker
* Docker Compose
  
## Docker Compose specific commands  
### Production
- run docker-compose:
  - `docker-compose up -d`
- rebuild existing service:
  - `docker-compose up --build shah-website`
- rebuild service using no cache:
  - `docker-compose build --no-cache shah-website`

## Docker specific commands  
### Local dev
- `docker build --no-cache -f Dockerfile.dev -t website:latest .`
  - this will build the local dev file with the latest tag 
- `docker run -it -p 4200:4200 website`
  - this will run the docker image locally

## Todo
* Update proj. dependencies and remove security vulns
* Add blogging system using Elixir
* Add trivial unit tests
* Add section for music production/hobbies
* Add SEO to site
* Fix common issues using Google Lighthouse: https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=http://www.shahsyed.com
* Add robots.txt
* Fix bug where clicking projects nav menu and then not selecting anything will still have the button highlighted on projects (even though that page isn't selected)
* Fix bug where hotlinking a page should highlight nav menu 
* Add CI/CD pipeline
* ~~Add SoundCloud link to bottom of navbar~~
* ~~Clean up classes~~
* ~~Reorganize file structure and TypeScript classes~~  
* ~~Add Spotify profile to footer~~
* ~~Fix bug where you scroll down and footer is not responsive and there are spacing issues around it~~
* ~~remove DS store from repo~~
* ~~Add HTTPS to not make website throw errors when visiting~~
* ~~Dockerize NodeJS application~~
* ~~Update to NG 8~~
* ~~Update site from AngularJS 2.0 Beta 7 to Angular (AngularJS 4.0)~~
* ~~Create build scripts for production~~
* ~~Add Contact section/form to create a draft, add form validation/sanitation~~
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
