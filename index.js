const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./Db");
const app = express();
const {getdata} = require("./checkApis");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const News = require("./Routes/NewsApis");
const Startups = require("./Routes/StartupApis");
const Innovations = require("./Routes/InnovationApis");

dbConnection();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// added apis
app.use("/api/news", News);
app.use("/api/startup", Startups);
app.use("/api/innovation", Innovations);

// to check if server is working
app.get("/", (req, res) => {
  res.send("backend for jio project startups aggregator apis...!!!");
});

// getdata();

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
