const express = require("express");
const mongoose = require("mongoose");
const newsRoutes = require('./routes/news')
const app = express();
require('dotenv').config({path: __dirname + '/.env'})
const MONGODB_URI = process.env['MONGODB_URI'];

const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(newsRoutes);
mongoose
  .connect(
    MONGODB_URI
  )
  .then((res) => {
    console.log("connected!");
  })
  .catch((res) => console.log("failed to connect"));



app.listen(8080);
