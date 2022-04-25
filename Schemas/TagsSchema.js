const mongoose = require("mongoose")
const tagsSchema = new mongoose.Schema({
    domain: ['string']
});
module.exports = mongoose.model("TagsModel", tagsSchema)