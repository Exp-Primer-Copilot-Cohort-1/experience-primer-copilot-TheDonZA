// Create web server with Node.js

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var pathname = url.parse(request.url).pathname;
  console.log('Request for ' + pathname + ' received.');

  if (pathname === '/') {
    pathname = '/index.html';
  }

  var extname = path.extname(pathname);
  var contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
  }

  fs.readFile(pathname.substr(1), function (err, data) {
    if (err) {
      console.log(err);
      response.writeHead(404, { 'Content-Type': 'text/html' });
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.write(data.toString());
    }
    response.end();
  });
});

// Listen on port 8000, IP defaults to