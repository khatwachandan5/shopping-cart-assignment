const canned = require("canned");
const http = require("http");
const opts = {
  cors: true,
  cors_headers: [
    {
      "Access-Control-Allow-Origin": "*",
    },
  ],
};

const connector = canned("./server", opts);
const port = 8081;

console.log(`Server listening on ${port}`);

http.createServer(connector).listen(port);
