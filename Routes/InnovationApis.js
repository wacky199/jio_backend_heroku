const express = require("express");
const router = express.Router();
// const { InnovationModel } = require("../Schemas/InnovationSchema");
const { NewsModel } = require("../Schemas/NewsSchema");


const LIMIT = 10;

// fetch all the innovation from the database
router.get("/all", async (req, res) => {
  const doc = await NewsModel.find();
  const error = {
    error: "There isn't any doc!!!",
  };
  doc.slice(-LIMIT,)
  res.json(doc ? doc : error);
});

// pagination
router.get("/all/:page", async (req, res) => {
  const para = req.params.page;
  const page = parseInt(para) - 1;
  let pageCount = 0;
  pageCount = await NewsModel.count();
  let SKIP = page * LIMIT;
  if (SKIP > pageCount || SKIP < 0) {
    SKIP = 0;
  }
  const doc = await NewsModel.find().limit(LIMIT).skip(SKIP);
  const error = {
    error: "There isn't any doc!!!",
  };
  res.json(doc ? doc : error);
});

module.exports = router;
