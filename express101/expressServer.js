const path = require("path"); // import path module
const express = require("express"); // import express module
// an 'app' is the express function called createApplication when invoked
const app = express(); // create an instance of an express app

// serve up static files in the public folder
app.use(express.static("public"));

// all is a method that takes two args, 1: route 2: callback to run if the route is requested
app.all("/", (req, res) => {
  // express handles the basic headers for us (status code, mime-type, etc.)
  // read in node.html
  console.log(__dirname + "/node.html");
  res.sendFile(path.join(__dirname + "/node.html")); // send the file back to the client
  // express also handles the end for us
});

// * will match any path, all will listen for all http verbs
app.all("*", (req, res) => {
  res.send("<h1>Sorry, this page does not exist</h1>");
});

app.listen(3000);
console.log("listening on port 3000");
