const http = require("http");
const fs = require("fs");
const port = 5432;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Page coming from Node js server........");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
