# keyboard-warrior
Type your way past many enemies to win the game!

# stack

* Front end: [React](https://github.com/facebook/react) (created with [create-react-app](https://github.com/facebook/create-react-app))
* API: [Node.js](https://github.com/nodejs/node) + [Express](https://github.com/expressjs/express) (boilerplate code is taken from [express-generator](https://github.com/expressjs/generator))
* Database: [PostgreSQL](https://github.com/postgres/postgres) connected with [Sequelize](https://github.com/sequelize/sequelize)
* Other dependencies:
  * 

# setup

1) Clone repo to your own machine
2) Make sure you have ports 3000 and 3001 available. 3000 is used for the React client and 3001 for the Express server.
3) You should now have two folders called 'client' and 'server'
4) `cd client` and run `npm install` to install client-side dependencies
5) then do `cd ../server` and run `npm install` to install server-side dependencies
6) create a file called *.env.development* (following the example in *.env.example*) within the server folder. Add your database URL here.
7) Now, have 2 terminals open, one in the client folder and one in the server folder. Run `npm start` in both terminals
8) Your browser should automatically open a page in localhost:3000 for you to view the app
