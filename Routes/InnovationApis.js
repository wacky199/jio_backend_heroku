const express = require("express");
const router = express.Router();
// const { InnovationModel } = require("../Schemas/InnovationSchema");
const { StartupModel } = require("../Schemas/StartupSchema");



const LIMIT = 10;
// fetch all the innovation from the database
router.get("/", async (req, res) => {
  const doc = await StartupModel.find();
  const error = {
    error: "There isn't any doc!!!",
  };
  doc.slice(-LIMIT,)
  res.json(doc ? doc : error);
});

// fetch according to given parameter

// router.get("/:tag", async (req, res) => {
//   const tag = req.params.tag;
//   console.log(tag);
//   const query = await InnovationModel.find({ tag: tag }).limit(LIMIT);
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
//   innovationName: "Fantasy",
// };

// // set/add innovation to the database
// router.post("/post", async (req, res) => {
//   const data = req.body;
//   console.log(data);
//   const innovation = new InnovationModel(data);
//   try {
//     innovation.save();
//     console.log("saved successfully", innovation);
//     res.send("success");
//   } catch (err) {
//     console.log("Error!!", err);
//     res.send("error");
//   }
// });

module.exports = router;
