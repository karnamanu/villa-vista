const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: String,
	image: {
		type: String,
		default:
			"https://thumbs.dreamstime.com/b/natural-background-sunset-coconut-tree-mountain-coloring-vector-illustration-307962554.jpg",
		set: (v) =>
			v === ""
				? "https://thumbs.dreamstime.com/b/natural-background-sunset-coconut-tree-mountain-coloring-vector-illustration-307962554.jpg"
				: v,
	},
	price: Number,
	location: String,
	country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
