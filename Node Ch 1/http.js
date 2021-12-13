const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("<h1>Hello Nodejs you are Beauty</h1>");
});

server.listen(4141, () => {
  console.log("Server is running in port 4141");
});
