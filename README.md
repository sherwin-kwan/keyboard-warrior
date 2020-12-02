# Keyboard Warrior

# About

Keyboard Warrior is a game where players type words to launch attacks and spells across multiple levels before facing the final boss to win the game.

Built as the Final Project for the Lighthouse Labs Web Development Bootcamp

Play the game here: [https://keyboard-warrior.netlify.app/](https://keyboard-warrior.netlify.app/)

Contributors: [Sherwin Kwan](https://github.com/sherwin-kwan/), [Jillian Martin](https://github.com/jilliankmartin), [Helen Ouyang](https://github.com/helenohyeah)

# Screenshots

![Map screenshot](./client/docs/start-screen-map-select.gif?raw=true "Select arena screen")
![Arena screenshot](./client/docs/arena-battle-play.gif?raw=true "Battle arena")


# Tech Stack

* __Front-end:__ [React](https://github.com/facebook/react) (created with [create-react-app](https://github.com/facebook/create-react-app)) with [Sass](https://github.com/sass/sass) for styling
* __Back-end:__ [Node.js](https://github.com/nodejs/node) + [Express](https://github.com/expressjs/express) (boilerplate code is taken from [express-generator](https://github.com/expressjs/generator))
* __Database:__ [PostgreSQL](https://github.com/postgres/postgres) connected with [Sequelize](https://github.com/sequelize/sequelize)
* __Testing:__ [Cypress](https://www.npmjs.com/package/cypress) for end-to-end testing
* __Additional Packages:__
  * [axios](https://github.com/axios/axios)
  * [react-skillbars](https://www.npmjs.com/package/react-skillbars)
  * [react-step-progress-bar](https://www.npmjs.com/package/react-step-progress-bar)
  * [interweave](https://www.npmjs.com/package/interweave)
  * [normalize.css](https://github.com/necolas/normalize.css/) for base styling

# Run This App Locally

Notes: 
* These commands are intended to be run in a Bash shell. 
* Make sure you have ports 3000 and 3001 available. 3000 is used for the React client and 3001 for the Express API server. If you wish to use different ports, see [here](https://tech.amikelive.com/node-830/reactjs-changing-default-port-3000-in-create-react-app/comment-page-1/) for instructions on how to change the React port. The Express port may be changed by editing the constant `PORT` in `server/app.js`
* You will need access to a Postgres database to run this app.

## Setup Instructions

1) Clone repo to your machine
2) You should now see two directories called 'client' and 'server'. 'client' is the React app, 'server' is the Node server, and together they make up Keyboard Warrior!
3) `cd client` and run `npm install` to install client-side dependencies
4) `cd ../server` and run `npm install` to install server-side dependencies
5) Create a file called *.env.development* (following the example in *.env.example*) within the server directory. Add your database credentials (DATABASE_URL, DB_HOST, DB_NAME, DB_PASS, and DB_USER here)
6) Open 2 terminals, one in the client directory and one in the server directory. Run `npm start` in both terminals
7) Your browser should automatically open a page to localhost:3000 for you to view the app

# Known Issues

* Music may fail to play properly in some browsers.

# Version History

Version | Date
---|---
0.1 | 2020-11-29