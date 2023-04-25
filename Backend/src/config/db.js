require("dotenv").config();
const mongoose = require("mongoose");
const MONGOURl = process.env.MONGOURL;
module.exports = connect = async () => {
  return await mongoose.connect("mongodb+srv://subhamsahoo:shubham@cluster0.fsljoji.mongodb.net/publishbackend?retryWrites=true&w=majority");
};
