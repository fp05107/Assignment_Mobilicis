require("dotenv").config();
const mongoose = require("mongoose");
const MONGOURl = process.env.MONGOURL;
module.exports = connect = async () => {
    console.log(typeof(MONGOURl))
  return await mongoose.connect(MONGOURl);
};
