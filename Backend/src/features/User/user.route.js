const express = require("express");
const mongoose = require("mongoose");
const User = require("./user.model");
const app = express.Router();
// Mercedes-Benz
app.get("/matchIncomeAndCar", async (req, res) => {
  try {
    const data = await User.aggregate([
      {
        $match: {
          $and: [
            { income: { $lte: 5 } },
            { car: { $in: ["BMW", "Mercedes-Benz"] } },
          ],
        },
      },
    ]);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(404).send({ error:"Internal Server error" });
  }
});
// Male Users which have phone price greater than 10,000.
app.get("/vivek2", async (req, res) => {
  try {
    const data = await User.find({ phone_price: { $gt: 100 } });
    return res.status(200).send(data);
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
});

app.get("/vivek3", async (req, res) => {
  try {
    const data = await User.find();

    return res.status(200).send();
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
});


// Show the data of top 10 cities which have the highest number of users and their average income.

module.exports = app;
