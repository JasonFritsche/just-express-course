const http = require("http"); // import http module (is a core/native node js module)

const fs = require("fs"); // import filesystem module, native to node js
// fs gives node access to this computer's filesystem

// the http module has a createServer method
// createServer takes a callback function as an argument
// the callback function takes two arguments: request and response
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    // the user wanlts the home page because the url is /
    // response object is our way of responding to the requestor (web browser)
    // http message
    // 1. start line -- done for us
    // 2. header
    // 3. body

    // writeHead takes two arguments:
    // 1. status code
    // 2. object for the mime-type
    res.writeHead(200, { "content-type": "text/html" }); // header
    //res.write("<h1 style='color:blue'>This is the home page!!</h1>"); // body
    const homePageHtml = fs.readFileSync("node.html");
    res.write(homePageHtml); // serve/return not the file itself, but the contents of the file
    res.end(); // end the response... let the browser know we're done on our end
  } else if (req.url === "/nodelogo.png") {
    res.writeHead(200, { "content-type": "image/png" });
    const img = fs.readFileSync("nodelogo.png");
    res.write(img);
    res.end();
  } else if (req.url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    const css = fs.readFileSync("styles.css");
    res.write(css);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" }); // header
    res.write(
      "<h4 style='color:red'>Sorry, this isn't the page you're looking for</h4>"
    );
    res.end(); // end the response... let the browser know we're done on our e
  }
});

// createServer returns an object with a listen method
// listen takes 1 argument which is a port number as an argument
server.listen(3000); // port 999 and below are not available for use
