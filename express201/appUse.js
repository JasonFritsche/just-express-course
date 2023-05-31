const express = require("express");
const app = express();

// Express is two things
// 1. Router
// 2. Middleware that comprises a web framework

// Middleware is any function that has access to the req, res, next objects

function validateUser(req, res, next) {
  // get info out of the req object
  // do some stuff with the db
  res.locals.validated = true;
  console.log("validated ran!");
  next();
}

app.use("/admin", validateUser);

app.get("/", (req, res, next) => {
  res.send("<h1>Home Page</h1>");
  console.log(res.locals.validated);
});

app.get("/admin", (req, res, next) => {
  res.send("<h1>Admin Page</h1>");
  console.log(res.locals.validated);
});

app.listen(3000);
