const express = require("express");
const router = express.Router();
const { NewsModel } = require("../Schemas/NewsSchema");

const LIMIT = 10; 
// fetch all the news from the database
router.get("/", async (req, res) => {
  const doc = await NewsModel.find().limit(LIMIT);
  const error = {
    error: "There isn't any doc!!!",
  };
  res.json(doc ? doc : error);
});

// fetch according to given parameter

// router.get("/:tag", async (req, res) => {
//   const tag = req.params.tag;
//   console.log(tag);
//   const query = await NewsModel.find({ tag: tag }).limit(LIMIT);
//   if (query.length > 0) {
//     res.json(query);
//     res.status(200);
//   } else {
//     res.json({ Error: "No specified tag found!" });
//     res.status(404);
//   }
// });

// temp object to check the apis 

// const tempData = {
//   timestamp: +new Date(),
//   source: "VS code",
//   headline: "NO STIPEND, NO HEADLINE",
//   body: "what can I write here!",
//   imageLink: "dont know yet",
//   startupName: "Fantasy",
// };

// set/add news to the database
// router.post("/post", async (req, res) => {
//   const data = req.body;
//   console.log(data);
//   const news = new NewsModel(data);
//   try {
//     news.save();
//     console.log("saved successfully", news);
//     res.send("success");
//   } catch (err) {
//     console.log("Error!!", err);
//     res.send("error");
//   }
// });

module.exports = router;
