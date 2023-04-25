require("dotenv").config();
const mongoose = require("mongoose");
const MONGOURl = process.env.MONGOURL;
module.exports = connect = async () => {
   
  return await mongoose.connect(MONGOURl);
};
