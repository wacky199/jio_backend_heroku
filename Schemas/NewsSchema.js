const mongoose = require("mongoose")
const newsSchema = new mongoose.Schema({
  timestamp: 'string',
  headline: 'string',
  des: 'string',
  img: 'string',
  // source: 'string',
  // startupName: 'string',
  // tag:'string'
});

const NewsModel = mongoose.model('NewsModel', newsSchema);
module.exports = {NewsModel};
