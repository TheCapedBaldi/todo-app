# Todo App
[![Build Status](https://travis-ci.com/NaseebullahSafi/todo-app.svg?branch=master)](https://travis-ci.com/NaseebullahSafi/todo-app)

Simplified SPA Todo application using Reactjs, Styled Components, redux, Jest, React Router; fully automated using Travis, and automatic deployment to Netlify

The project is built from scratch without any CLI or scaffolding, using webpack for development and production environment. **More info below.**

![TODO App](https://github.com/NaseebullahSafi/todo-app/blob/master/proj_img.PNG?raw=true)

## Getting Started
To start the app:
```
git clone https://github.com/NaseebullahSafi/todo-app.git
cd todo-app     # Change directory 
npm i -g yarn   # Optional: I like using yarn
yarn            # Will install dependencies
yarn start      # Will fireup the app
```
Open app on port [8081](http://localhost:8081/)

### Unit Testing
To start unit testing:
```
yarn test       # Will fireup jest unit testing
```
## Deployment
The app is deployed on [Netlify](https://www.netlify.com/), and CI/CD pipelined using [Travis](https://travis-ci.com/)

## Task
The functional requirements of the application are as follows:
- List all existing todos
- Create a todo
- Update/Edit a todo
- 'Record' button which will record the action taken by the user. i.e. created/deleted/updated a todo
- 'Stop Recording' button which will stop the recording
- 'Clear Recording' button which will clear whatever has been recorded
- 'Play Recording' button which will start playing with the following actions
  - Clear all items from the app
  - Start adding the todo items from the point where user start recording, in correct order.

## Todo
Each Todo item is defined as an object with the following props:

```js
TODO: {
  id          : String,
  name        : String,
  description : String,
  date        : String
}
```

## Folder Structure
The application has the following folder structure:

    .
    ├── build                    # Compiled files (used for production ready)
    ├── node_modules             # Any external libraries
    ├── public                   # Any files exposed to the public
    │   ├── _redirects           # File to help netlify resolve 404 (or page refresh)
    │   ├── favicon.ico          # Icon for the app
    │   ├── index.html           # Root html file (our app will be injected here in #root element)
    │   ├── manifest.json        # App definition picked up by mobile devices
    │   └── service-wroker.js    # Handy for offline service
    ├── src                      # Source files
    │   ├── App                  # Root component
    │   |   ├── __snapshots__    # Generated by jest
    │   |   ├── App.js           # Main source code for the component
    │   |   ├── App.style.js     # Styled-component styles for the component
    │   |   ├── App.test.js      # Jest test for the component
    │   |   └── index.js         # index file which exports the main component 
    │   ├── assets               # Includes icons, img, typography
    │   ├── atoms                # Basic bulding block of elements (i.e. button, h1, img etc...)
    │   ├── hooks                # React custom hooks for abstraction
    │   ├── molecules            # Components which consume molecules and atoms
    │   ├── organisms            # Components which consumes organisms, molecules and atoms
    │   ├── Store                # Everything related to redux
    │   ├── utility              # Shareable functions across multiple components
    │   ├── global.style.js      # Global styles applied for the entire app
    │   ├── index.js             # Wraps our entire app with context(redux and reac router)
    │   └── setupTest.js         # Setup for jest enzyme
    ├── .babelrc                 # Babel configuration
    ├── .gitignore               # Git ignore config
    ├── .travis.yml              # Travis file for deployment automation
    ├── package.json             # Packages used within the app
    ├── webpack.config.js        # Webpack bundle used for both (dev & prod)
    ├── webpack.development.js   # Webpack config for development environment
    ├── webpack.production.js    # Webpack config for production environment
    └── yarn.lock                # Lock file


## Author
* **Naseebullah Ahmadi** - [Github](https://github.com/NaseebullahSafi)
