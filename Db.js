const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnection(){
  try{
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("mongoose is connected!!!");
  }catch(err){
    console.log("got some error!!!", err);
  }
}

module.exports = {dbConnection};