const axios = require("axios");
const url = "http://localhost:3000/api/news/all/1";

function getdata() {
  axios.get(url).then((res) => {
    console.log(res.headers.objcount);
    return res;
  });
  return true;
}

module.exports = { getdata };
