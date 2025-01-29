// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://niloysarkar1998:DPCGpwrxxP95yKdB@cluster0.z97yd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
// .then(()=>{
//     console.log("success mongodb connection");
// })
// .catch((err)=>{
//     console.log(err);
// })


const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://niloysarkar1998:DPCGpwrxxP95yKdB@cluster0.z97yd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch((err) => console.error("❌ MongoDB Connection Failed:", err));