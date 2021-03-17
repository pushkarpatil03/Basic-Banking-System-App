# Basic-Banking-System-App
## _TSF GRIP Project March21_ 
***
## Introduction
A simple dynamic website that has the following specs: A dummy data in the database for up to 15 customers. Database: MongoDB [Mongoose]. Customers table with basic fields such as name, email, current balance, etc. Transfers table with a record of all transfers that happened.
***
## Routes
- ### Home
- ### Customers
- ### Transfer History

***
## Packages
- ### nodemon 
nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- ### express
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications
- ### ejs
Embedded JavaScript templates: EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. 
- ### ejs-mate
Express 4.x layout, partial and block template functions for the EJS template engine.
- ### mongoose
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
- ### method-override
Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn’t support it.
- ### express-session
It provides you with a nice API to work with sessions (letting you get & set data to the session)
- ### connect-flash
The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user. 
- ### connect-mongo
MongoDB session store for Connect and Express written in Typescript.

***
## Installation
This BankingApp requires [Node.js](https://nodejs.org/) to run.

To run on localhost... install the dependencies and start the server.

```sh
cd BankingApp
npm i
node seeds/index.js
node app.js
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

***
## References
coming soon!!!

***
## License
Its is absolutely free. Hell Yeah!!!
Author: Pushkar Patil
