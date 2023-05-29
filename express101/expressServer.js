const express = require("express"); // import express module
// an 'app' is the express function called createApplication when invoked
const app = express(); // create an instance of an express app

// all is a method that takes two args, 1: route 2: callback to run if the route is requested
app.all("*", (req, res) => {
  // express handles the basic headers for us (status code, mime-type, etc.)
  res.send(`<h1>This is the home page</h1>`);
  // express also handles the end for us
});

app.listen(3000);
console.log("listening on port 3000");
