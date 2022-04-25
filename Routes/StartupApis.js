const express = require("express");
const router = express.Router();
const { StartupModel } = require("../Schemas/StartupSchema");

const LIMIT = 10;
// fetch all the startup from the database
router.get("/", async (req, res) => {
  const doc = await StartupModel.find().limit(LIMIT);
  const error = {
    error: "There isn't any doc!!!",
  };
  res.json(doc ? doc : error);
});

// fetch according to given parameter
router.get("/:sector", async (req, res) => {
  const sector = req.params.sector;
  console.log(sector);
  const docs = await StartupModel.find();
  let result = [];
  docs.forEach((doc) => {
    const sector_str = doc.sector;
    const tags1 = sector_str.split("/");
    const tags2 = sector_str.split(",");
    const tags = tags1.concat(tags2);
    tags.forEach((tag) => {
      const str = tag.toLowerCase();
      const str1 = str.trim();
      if (str1.localeCompare(sector) === 0) {
        result.push(doc);
      }
    });
  });
  if (result.length > 0) {
    res.json(result);
    res.status(200);
  } else {
    res.json({ Error: "No specified tag found!" });
    res.status(404);
  }
});

// temp object to check the apis
// const tempData = {
//   timestamp: +new Date(),
//   source: "VS code",
//   headline: "NO STIPEND, NO HEADLINE",
//   body: "what can I write here!",
//   imageLink: "dont know yet",
//   startupName: "Fantasy",
// };

// set/add startup to the database
// router.post("/post", async (req, res) => {
//   const data = req.body;
//   console.log(data);
//   const startup = new StartupModel(data);
//   try {
//     startup.save();
//     console.log("saved successfully", startup);
//     res.send("success");
//   } catch (err) {
//     console.log("Error!!", err);
//     res.send("error");
//   }
// });

module.exports = router;
