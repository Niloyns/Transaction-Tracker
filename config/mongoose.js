const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch((err) => console.error("❌ MongoDB Connection Failed:", err));

module.exports = mongoose;
