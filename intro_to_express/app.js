const express = require("express");
const morgan = require("morgan");
const app = express();
//app.use(morgan("dev"));
function customMiddleWere(req, res, next) {
  if (req.url === "/help") {
    res.send("<h1>Sorry this page is Blocked by Admin</h1>");
  }
  next();
}

function tinyLogger() {
  return (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
  };
}
const middleWare = [customMiddleWere, tinyLogger()];
app.use(middleWare);
app.get("/about", (req, res) => {
  res.send("<h1>I am About Page</h1>");
});
app.get("/help", (req, res) => {
  res.send("<h1>I am help page</h1>");
});

app.get("/", (req, res) => {
  res.send("<h1>I am Listening</h1>");
});
app.get("*", (req, res) => {
  res.send("<h1>Error 404 Not Found</h1>");
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Sever is Running on PORT ${PORT} `);
});
