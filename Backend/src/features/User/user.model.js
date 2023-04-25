const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        id: Number,
        last_name: String,
        first_name: String,
        email: String,
        gender: String,
        income: Number,
        city: String,
        car: String,
        quote: String,
        phone_price: Number
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = User = mongoose.model("User", userSchema);
