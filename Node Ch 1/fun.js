const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (error, data) => {
    res.write(data);
    res.end();
  });
});

server.listen(4141, () => console.log("Server is Running"));
