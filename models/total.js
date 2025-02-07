const mongoose = require("mongoose");

const totalSchema = new mongoose.Schema({
    amount: { type: Number, default: 0 }
});

const Total = mongoose.model("Total", totalSchema);

module.exports = Total;
