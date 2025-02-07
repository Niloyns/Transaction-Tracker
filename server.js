require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("./config/mongoose");
const transactionsRouter = require("./routers/transactions");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", transactionsRouter);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
