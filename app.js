const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

// Connect to MongoDB
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.log("Error connecting to MongoDB:", err);
	});

async function main() {
	await mongoose.connect(MONGO_URL);
}

// Middleware to parse JSON body
app.use(express.json());

// Root route
app.get("/", (req, res) => {
	res.send("Hii, I am root");
});

// Test route to save hardcoded sample listing
app.get("/testListing", async (req, res) => {
	let sampleListing = new Listing({
		title: "MY New Villa",
		description: "By the Beach",
		price: 1200,
		location: "Calangunte,Goa",
		country: "India",
		image: "", // test default image
	});
	await sampleListing.save();
	console.log("Sample listing was saved");
	res.send("Successfully tested and saved sample listing");
});

// Dynamic route: POST listing using Postman
app.post("/listings", async (req, res) => {
	try {
		const newListing = new Listing(req.body); // takes data from request body
		await newListing.save();
		console.log("New listing saved:", newListing);
		res.status(201).json(newListing); // sends back created listing as response
	} catch (err) {
		console.error("Error creating listing:", err);
		res.status(500).json({ error: "Failed to create listing" });
	}
});

// Start the server
app.listen(8082, () => {
	console.log("Server is listening on port 8082");
});
