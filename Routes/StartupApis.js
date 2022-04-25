const express = require("express");
const router = express.Router();
const { StartupModel } = require("../Schemas/StartupSchema");

const LIMIT = 10;

// fetch all the startup from the database
router.get("/all", async (req, res) => {
  const doc = await StartupModel.find().limit(LIMIT);
  const error = {
    error: "There isn't any doc!!!",
  };
  res.json(doc ? doc : error);
});


// pagination
router.get("/all/:page", async (req, res) => {
  const para = req.params.page;
  const page = parseInt(para) - 1;
  let pageCount = 0;
  pageCount = await StartupModel.count();
  let SKIP = page * LIMIT;
  if (SKIP > pageCount || SKIP < 0) {
    SKIP = 0;
  }
  const doc = await StartupModel.find().limit(LIMIT).skip(SKIP);
  const error = {
    error: "There isn't any doc!!!",
  };
  res.append("objCount", pageCount);
  res.json(doc ? doc : error);
});

// fetch according to given parameter/sector
router.get("/sector/:sector", async (req, res) => {
  const sector = req.params.sector;
  const result = await StartupModel.find({ sector: { $regex: sector } }).limit(
    LIMIT
  );
  if (result.length > 0) {
    res.json(result);
    res.status(200);
  } else {
    res.json({ Error: "No specified tag found!" });
    res.status(404);
  }
});

// pagination in sector startups
router.get("/sector/:sector/:page", async (req, res) => {
  const sector = req.params.sector;
  const para = req.params.page;
  const page = parseInt(para) - 1;
  let pageCount = 0;
  pageCount = await StartupModel.count();
  let SKIP = page * LIMIT;
  if (SKIP > pageCount || SKIP < 0) {
    SKIP = 0;
  }
  const result = await StartupModel.find({ sector: { $regex: sector } }).limit(
    LIMIT
  );
  res.append("objCount", pageCount);
  if (result.length > 0) {
    res.json(result);
    res.status(200);
  } else {
    res.json({ Error: "No specified tag found!" });
    res.status(404);
  }
});


module.exports = router;
