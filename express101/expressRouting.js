const express = require("express");
const app = express();

// app object has a few methods:
// HTTP verbs (get, post, put, delete, all, use)
// default for all browsers is GET request
// all means app will accept any HTTP verb
// all verb methods take two args: 1. path 2. callback to run if the path is requested
app.get("/", (req, res) => {
  res.send("get page yo");
});

app.post("/", (req, res) => {
  res.send("post page yo");
});

app.put("/", (req, res) => {
  res.send("put page yo");
});

app.delete("/", (req, res) => {
  res.send("delete page yo");
});

app.listen(3000);
console.log("listening on port 3000");
