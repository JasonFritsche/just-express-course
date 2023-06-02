const express = require("express");
const app = express();
const helmet = require("helmet");

app.use(helmet()); // sets various HTTP headers to make your app more secure

app.use(express.static("public"));
app.use(express.json()); // parses incoming requests with JSON payloads (using body-parser)
app.use(express.urlencoded({ extended: false })); // parses incoming requests with urlencoded payloads (using body-parser)

app.post("/ajax", (req, res) => {
  console.log(req);
  res.send("Hello");
});

app.listen(3000);
