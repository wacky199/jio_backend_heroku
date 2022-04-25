const mongoose = require("mongoose");
const startupSchema = new mongoose.Schema({
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
const StartupModel = mongoose.model("StartupModel", startupSchema);
module.exports = { StartupModel };
