require("dotenv").config();
const mongoose = require('mongoose');
// const MONGOURl = process.env.MONGOURl
module.exports = connect = async () => {
    // console.log("Connected");
    return await mongoose.connect("mongodb://localhost:27017/Mobilicis");
};
