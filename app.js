// Load the http module to create an HTTP server.
const http = require('http');

// Configure the HTTP server to respond with "Hello World" to all requests.
const hostname = '0.0.0.0';
const port = 3030;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World, this is ashi singh....\n');
});

// Listen on port 3000 and IP 127.0.0.1.
server.listen(port, hostname, () => {
// console.log("Server running at http://${hostname}:${port}/");
});
