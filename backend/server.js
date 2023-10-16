const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Metods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Alow-Headers", "Content-Type, Authorization");
  next();
});

app.use(routes);

app.listen(3000);
