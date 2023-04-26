const express = require("express");
const mongoose = require("mongoose");
const User = require("./user.model");
const app = express.Router();

//Default
app.get("/", async (req, res) => {
  const { page, limit } = req.query;
  const perPage = parseInt(limit) || 5; // Default limit to 10 records per page
  const currentPage = parseInt(page) || 1; // Default page to 1
  try {
    const data = await User.find()
      .skip((currentPage - 1) * perPage) // Skip records based on current page and limit
      .limit(perPage); // Fetch records based on limit;;
    return res.status(200).send(data);
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
});
// Mercedes-Benz
app.get("/usersByIncomeAndCar", async (req, res) => {
  const { page, limit } = req.query;
  const perPage = parseInt(limit) || 10; // Default limit to 10 records per page
  const currentPage = parseInt(page) || 1; // Default page to 1
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
    ])
      .skip((currentPage - 1) * perPage) // Skip records based on current page and limit
      .limit(perPage); // Fetch records based on limit;;
    return res.status(200).send(data);
  } catch (error) {
    return res.status(404).send({ error: "Internal Server error" });
  }
});
// Male Users which have phone price greater than 10,000.

app.get("/usersByPhonePrice", async (req, res) => {
  const { page, limit } = req.query;
  const perPage = parseInt(limit) || 10; // Default limit to 10 records per page
  const currentPage = parseInt(page) || 1; // Default page to 1
  try {
    const data = await User.find({ phone_price: { $gt: 10000 } })
      .skip((currentPage - 1) * perPage) // Skip records based on current page and limit
      .limit(perPage); // Fetch records based on limit;
    return res.status(200).send(data);
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
});

// Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
app.get("/usersByLastNameM", async (req, res) => {
  const { page, limit } = req.query;
  const perPage = parseInt(limit) || 10; // Default limit to 10 records per page
  const currentPage = parseInt(page) || 1; // Default page to 1
  try {
    const users = await User.find({
      last_name: { $regex: /^M/i }, // Last name starts with "M"
      quote: { $exists: true, $gt: 15 }, // Quote length greater than 15
      email: { $regex: /M/i }, // Email includes last name
    })
      .skip((currentPage - 1) * perPage) // Skip records based on current page and limit
      .limit(perPage); // Fetch records based on limit;;
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
});

// Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.

app.get("/usersByCar", async (req, res) => {
  const { page, limit } = req.query;
  const perPage = parseInt(limit) || 10; // Default limit to 10 records per page
  const currentPage = parseInt(page) || 1; // Default page to 1
  try {
    const users = await User.find({
      $and: [
        { car: { $in: ["BMW", "Mercedes", "Audi"] } },
        { email: { $not: /\d/ } },
      ],
    })
      .skip((currentPage - 1) * perPage) // Skip records based on current page and limit
      .limit(perPage); // Fetch records based on limit;;
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
});

// Show the data of top 10 cities which have the highest number of users and their average income.
app.get("/topCities", async (req, res) => {
  try {
    const cityStats = await User.aggregate([
      {
        $group: {
          _id: "$city",
          totalUsers: { $sum: 1 },
          avgIncome: { $avg: "$income" },
        },
      },
      {
        $sort: { totalUsers: -1 },
      },
      // {
      //   $limit: 10,
      // },
    ])
    return res.status(200).send(cityStats);
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
});

module.exports = app;
