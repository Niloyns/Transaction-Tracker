const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now // Stores the creation time
    }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
