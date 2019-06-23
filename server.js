// ----------------------------------------------------------------------------------------------------
// BOILERPLATE CODE FOR SERVER
// (Boilerplate code is a section of code that has to be included in with little or no alteration)


// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");


// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// Tells node that we are creating an "express" server
const app = express();
// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3001;      // Need to assign process.env.PORT for Heroku.  process.env.PORT will let Heroku assign
                                            // a port at random.  If that is unavailable, then the port will be assigned to port 3001
                                            // which is the standard default second choice for a webserver.

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactmongodbsave");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



// ----------------------------------------------------------------------------------------------------
// INSTRUCTIONS AND ADDITIONAL NOTES

/*
.gitignore file

For when uploading folder to a GitHub repository.

Create .gitignore file at start of project and include inside it the following lines of code:
node_modules
.DS_Store

It's good practice to always include node_modules in the .gitignore file because this folder can get huge.
We have coded to "require" npm install of any packages necessary for this node app, so if someone clones this repo from
GitHub, all they have to do is npm install any necessary packages for the app to work. Therefore the node_modules folder 
doesn't need to be uploaded to GitHub.



------------------------------------------------------------
COMMAND LINE commands

Before running server.js file in node, install package dependencies listed in package.json
by typing either of the following into the command line:
// npm i            // this is just a shorthand version of npm install
// npm install



--------------------
Starting up and running MongoDB with React in a Full Stack App:

In a new command line window, type into the command line 
(This can be from any location of the computer, root level or otherwise. 
For mongod, you don’t necessarily have to be in the project folder):
// mongod

MongoDB must be running first before running the React Full Stack App.



--------------------
Create a Mongo DB database in Robo 3T (when running app locally):

Create an empty database called 'reactmongodbsave' in Robo 3T.

The Schemas inside the models folder will be run automatically by Mongoose when running the app ('npm start')
so no extra local configuration in Robo 3T necessary besides creating the empty database with the name 'reactmongodbsave'.



--------------------
To start the React Full Stack App:

While in the project directory in the command line 
(this must be a separate command line window to the command line window that has mongod running)
type the following to start the React Full Stack App:
// npm start

(for React, use npm start in the command line instead of node server)

The React App will open up automatically in the Chrome Browser



--------------------
If you need to exit at any point, type into the command line:
// control c



*/