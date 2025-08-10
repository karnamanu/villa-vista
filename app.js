const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/villavista";

main()
	.then(() => {
		console.log("connected to mongodb");
	})
	.catch((err) => {
		console.log(err);
	});

async function main() {
	await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
	res.send(" Hii, I am root");
});

app.get("/testListing", async (req, res) => {
	let sampleListing = new Listing({
		title: "My New Villa",
		description: "By the Beach",
		price: 1200,
		location: "Calangunte, Goa",
		country: "India",
	});
	await sampleListing.save();
	console.log("Sample was saved");
	res.send("Connected succesfully");
});

app.listen(6060, () => {
	console.log("server is listening to  port  6060");
});
