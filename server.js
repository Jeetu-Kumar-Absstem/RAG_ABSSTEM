const http = require("http");

const server = http.createServer((req, res) => {

  res.end("This is the first server created using Node.js");

});

server.listen(3000);