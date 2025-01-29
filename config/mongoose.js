const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://niloysarkar1998:DPCGpwrxxP95yKdB@cluster0.z97yd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("success mongodb connection");
})
.catch((err)=>{
    console.log(err);
})