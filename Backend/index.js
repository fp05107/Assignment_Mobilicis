require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./src/config/db");
// console.log(connect)
const PORT = process.env.PORT 
const userRoute = require("./src/features/User/user.route");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("", userRoute);

app.listen(PORT, async (req, res) => {
  try {
    await connect();
    console.log(`http://localhost:${PORT}`);
  } catch (error) {
    console.log(error.message);
    // return res.send(error);
  }
});
