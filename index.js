const express = require("express");
// const ejs = require("ejs");
const path = require("path")

const db = require("./config/mongoose");
const Contact = require("./models/contact");

const app = express();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"Views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));

let contactList = [
    // {
    //     name:"Niloy",
    //     phone:"+918745749625"
    // },
    // {
    //     name:"Trishita",
    //     phone:"+919875486589"
    // },
    // {
    //     name:"jiya",
    //     phone:"+918648547847"
    // }
]

app.get("/admin", async (req, res) => {
    try {
        const contacts = await Contact.find(); // Await the result of the database query
        res.render("index", { title: "Contact List", list: contacts }); // Pass the fetched contacts to the view
    } catch (error) {
        console.error("Error fetching contacts", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/", async (req, res) => {
    try {
        const contacts = await Contact.find(); // Await the result of the database query
        res.render("indexCopy", { title: "Contact List", list: contacts }); // Pass the fetched contacts to the view
    } catch (error) {
        console.error("Error fetching contacts", error);
        res.status(500).send("Internal Server Error");
    }
});

//Stored data in DB
app.post("/create-contact", async (req,res)=>{
    try {
    const contactData = await Contact(req.body);
    console.log(contactData);
    await contactData.save();
    // res.redirect("/");
    res.redirect("back");
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

app.get("/delete-contact/:id", async (req, res) => {
    try {
        // const contactId = req.query.id;
        const contactId = req.params.id;
        console.log(contactId);
        await Contact.findByIdAndDelete(contactId); // Delete contact from the database
        res.redirect("back");
    } catch (error) {
        console.error("Error deleting contact", error);
        res.status(500).send("Internal Server Error");
    }
});



app.listen(5000,()=>{
    console.log("running 5000");
});