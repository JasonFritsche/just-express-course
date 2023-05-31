const express = require("express");
const app = express();

// app comes with a use method (used to mount middleware!)
// use takes one arg(for right now): the middleware you want to run
// serve up static files in the public folder
app.use(express.static("public"));
// can serve any static files in multiple folders
// never do this with your node modules...should only serve things that are public (images, stylesheets, etc.)
app.use(express.static("node_modules"));

app.listen(3000);
console.log("listening on port 3000");
