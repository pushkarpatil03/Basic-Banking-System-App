# Basic-Banking-System-App
## _[TSF GRIP](https://thesparksfoundation.info/) Project March2021_ 
***
## Introduction
A simple dynamic website that has the following specs: A dummy data in the database for up to 15 customers. Database: MongoDB [Mongoose]. Customers table with basic fields such as name, email, current balance, etc. Transfers table with a record of all transfers that happened.
***
## Routes
- ### Home
<img width=500px src="https://user-images.githubusercontent.com/76061323/111433753-b2024e00-8724-11eb-8d13-e891c41581d2.png">

- ### Customers
<span> 
<img width=500px src="https://user-images.githubusercontent.com/76061323/111433748-b169b780-8724-11eb-9486-142a15830cf0.png">
<img width=500px src="https://user-images.githubusercontent.com/76061323/111433746-b0d12100-8724-11eb-8bec-d4f9df43ffba.png">
<img width=500px src="https://user-images.githubusercontent.com/76061323/111433744-b0388a80-8724-11eb-8b50-5184b5f06f57.png">
</span>

- ### Transfer History
<img width=500px src="https://user-images.githubusercontent.com/76061323/111433735-ae6ec700-8724-11eb-80e7-de78b4571756.png">

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

For developement mode... install the dependencies and start the server.

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
https://www.linkedin.com/posts/pushkar-patil-0197_gripmar21-tsf-grip-activity-6777980224354312192-KQd8

***
## License
Its is absolutely free. Hell Yeah!!!
Author: Pushkar Patil
