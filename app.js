const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js")

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main() 
    .then(() => {
        console.log("connected to mongodb");
    })
    .catch(() => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}


app.get("/", (req,res) => {
    res.send("Hii, I am root");
});

app.get("/testListing", async(req,res) => {
    let sampleListing = new Listing({
        title: "MY New Villa ",
        description:"By the Beach",
        price: 1200,
        location:"Calangunte,Goa",
        country:"India",
    });
    await sampleListing.save();
    console.log("sample was saved");
    res.send("successfully tested");

});


app.listen(8082, () => {
    console.log("server is listening on port 8082");
});  