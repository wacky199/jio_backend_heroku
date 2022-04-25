const mongoose = require("mongoose")
const innovationSchema = new mongoose.Schema({
  img: "string",
  link: "string",
  name: "string",
  sector: "string",
  desc: "string",
  legal_name: "string",
  headquarter: "string",
  business_model: "string",
  founding_date: "string",
  no_of_emp: "string",
  core_team: "string",
  funding_round: "array",
});
module.exports = mongoose.model("InnovationModel", innovationSchema)
