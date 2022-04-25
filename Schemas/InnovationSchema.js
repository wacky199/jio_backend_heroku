const mongoose = require("mongoose")
const innovationSchema = new mongoose.Schema({
  timestamp: "string",
  headline: "string",
  des: "string",
  img: "string",
});
module.exports = mongoose.model("InnovationModel", innovationSchema)
