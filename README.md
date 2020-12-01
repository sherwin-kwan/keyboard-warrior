# keyboard-warrior
Type your way past many enemies to win the game!

![Map screenshot](./client/docs/start-screen-map-select.gif?raw=true "Select arena screen")
![Arena screenshot](./client/docs/arena-battle-play.gif?raw=true "Battle Arena")

# stack

* Front end: [React](https://github.com/facebook/react) (created with [create-react-app](https://github.com/facebook/create-react-app)) with [Sass](https://github.com/sass/sass) for styling
* Connecting front end to API: [Axios](https://github.com/axios/axios)
* API: [Node.js](https://github.com/nodejs/node) + [Express](https://github.com/expressjs/express) (boilerplate code is taken from [express-generator](https://github.com/expressjs/generator))
* Database: [PostgreSQL](https://github.com/postgres/postgres) connected with [Sequelize](https://github.com/sequelize/sequelize)
* Other packages used:
  * [cypress](https://www.npmjs.com/package/cypress) testing suite
  * [react-skillbars](https://www.npmjs.com/package/react-skillbars)
  * [react-step-progress-bar](https://www.npmjs.com/package/react-step-progress-bar)
  * [interweave](https://www.npmjs.com/package/interweave)
  * [normalize.css](https://github.com/necolas/normalize.css/) for base styling

# run this app locally

Notes: 
* These commands are intended to be run in a Bash shell. 
* Make sure you have ports 3000 and 3001 available. 3000 is used for the React client and 3001 for the Express API server. If you wish to use different ports, see [here](https://tech.amikelive.com/node-830/reactjs-changing-default-port-3000-in-create-react-app/comment-page-1/) for instructions on how to change the React port. The Express port may be changed by editing the constant `PORT` in `server/app.js`
* You will need access to a Postgres database to run this app.

## setup instructions

1) Clone repo to your machine
2) You should now see two directories called 'client' and 'server'. 'Client' is a React app, 'server' is a Node app, and together they make up Keyboard Warrior!
3) `cd client` and run `npm install` to install client-side dependencies
4) then do `cd ../server` and run `npm install` to install server-side dependencies
5) Create a file called *.env.development* (following the example in *.env.example*) within the server folder. Add your database credentials (DATABASE_URL, DB_HOST, DB_NAME, DB_PASS, and DB_USER here)
6) Now, have 2 terminals open, one in the client folder and one in the server folder. Run `npm start` in both terminals
7) Your browser should automatically open a page in localhost:3000 for you to view the app

# known issues

* Music may fail to play properly in some browsers.
* Leaderboards may not update properly.
* To make testing easier during development, several "cheats" have been included that allow players to bypass levels of the game. Using cheats may cause errors and/or break the game. These will eventually be removed.

# version history

Version | Date
---|---
0.1 | 2020-11-29