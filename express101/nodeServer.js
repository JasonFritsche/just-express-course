const http = require("http"); // import http module (is a core/native node js module)

// the http module has a createServer method
// createServer takes a callback function as an argument
// the callback function takes two arguments: request and response
const server = http.createServer((req, res) => {
  console.log(req);
  // response object is our way of responding to the requestor (web browser)
  // http message
  // 1. start line -- done for us
  // 2. header
  // 3. body

  // writeHead takes two arguments:
  // 1. status code
  // 2. object for the mime-type
  res.writeHead(200, { "content-type": "text/html" }); // header
  res.write("<h1 style='color:blue'>Hello, World!</h1>"); // body
  res.end(); // end the response... let the browser know we're done on our end
});

// createServer returns an object with a listen method
// listen takes 1 argument which is a port number as an argument
server.listen(3000); // port 999 and below are not available for use
