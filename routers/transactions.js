const express = require("express");
const router = express.Router();
const Transaction = require("../models/transaction");
const Total = require("../models/total");

// Render Home Page
router.get("/", async (req, res) => {
    try {
        const transactions = await Transaction.find();
        const total = await Total.findOne();
        const totalBalance = total ? total.amount : 0;

        res.render("index", { title: "Transaction Tracker", transactions, totalBalance });
    } catch (error) {
        console.error("Error fetching transactions", error);
        res.status(500).send("Internal Server Error");
    }
});
router.get("/admin", async (req, res) => {
    try {
        const transactions = await Transaction.find();
        const total = await Total.findOne();
        const totalBalance = total ? total.amount : 0;

        res.render("admin", { title: "Transaction Tracker", transactions, totalBalance });
    } catch (error) {
        console.error("Error fetching transactions", error);
        res.status(500).send("Internal Server Error");
    }
});

// Add Transaction
router.post("/add-transaction", async (req, res) => {
    try {
        const { name, amount, type } = req.body;
        const transactionAmount = parseFloat(amount);

        if (isNaN(transactionAmount) || transactionAmount <= 0) {
            return res.status(400).json({ success: false, message: "Invalid amount" });
        }

        const transaction = new Transaction({ name, amount: transactionAmount, type });
        await transaction.save();

        let total = await Total.findOne();
        if (!total) total = new Total({ amount: 0 });

        total.amount += type === "income" ? transactionAmount : -transactionAmount;
        await total.save();

        res.json({ success: true, transaction, totalBalance: total.amount });
    } catch (error) {
        console.error("Error adding transaction", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

// Delete Transaction
router.delete("/delete-transaction/:id", async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) return res.status(404).json({ success: false, message: "Transaction not found" });

        let total = await Total.findOne();
        if (total) {
            total.amount += transaction.type === "income" ? -transaction.amount : transaction.amount;
            await total.save();
        }

        await Transaction.findByIdAndDelete(req.params.id);
        res.json({ success: true, totalBalance: total.amount });
    } catch (error) {
        console.error("Error deleting transaction", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

module.exports = router;
