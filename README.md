# Pokedex

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

## Deployment on production

### Heroku

In order to tell to Heroku how to deploy the application, it is mandatory to add a server which could run it. For that in the angular project:
1. Execute the following command: 
    > npm i express --save
2. Add the file server.js to the root folder
3. Modify the root to be accord to the application name given in the package.json
4. Test the solution in local with the command: 
    > node server.js.

    Should run successfully in [localhost:8080](localhost:8080)

With the configuration done. The next step is configurate the Heroku Account

[![N|Solid](https://www3.assets.heroku.com/assets/logo-purple-08fb38cebb99e3aac5202df018eb337c5be74d5214768c90a8198c97420e4201.svg)](https://www.heroku.com/)


Regarding to the heroku configuration

1. Create a free account in Heroku
2. Create a new app in Heroku
3. Go to the **deploy** tab and connect with your github repository then grant the necessary priviledges

After that, you have to alternatives:
- **Manual**: Keep reading
- **Automatic**: Go to Travis CI section

In the **deploy** tab, at the end of the page you could select the branch of your github repository and click **Deploy branch**

After few minutes in the top of your heroku account you can click on **Open app** button and this will redirect you to your application


## Automatic deployment with Travis CI

It is important to say that all the configuration done with heroku section it is mandatory no matter it is manual or automatic deployment. 

### Application Configuration
1. In the root directory of your application it is necesary to add the file **.travis.yml**
2.  Modify the package json and add to the scripts tag: 
     > "heroku-postbuild": "ng build --prod",

### Travis CI

[![N|Solid](https://miro.medium.com/max/600/1*M-Kj85siknLr66JqJ71PRA.png)](https://travis-ci.org/)

1. Create a free account
2. Link with your github account
3. Grant the priviledges to the desired repositories

#### Heroku
In the **deploy** tab, go to **Automatic deploy** 

### Finally

With the configuration done. Every time you commit and push changes to your repository will update your application


## Development server on local

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
