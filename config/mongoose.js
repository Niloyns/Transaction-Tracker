const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/contactList")
.then(()=>{
    console.log("success mongodb connection");
})
.catch((err)=>{
    console.log(err);
})