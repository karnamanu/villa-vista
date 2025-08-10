const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: String,
	image: {
		filename: {
			type: String,
			default: "listingImage",
		},
		url: {
			type: String,
			default:
				"https://i0.wp.com/picjumbo.com/wp-content/uploads/wooden-pedestal-table-in-nature-for-product-photography-free-image.jpeg?w=600&quality=80",
			set: (v) =>
				v === ""
					? "https://i0.wp.com/picjumbo.com/wp-content/uploads/wooden-pedestal-table-in-nature-for-product-photography-free-image.jpeg?w=600&quality=80"
					: v,
		},
	},
	price: Number,
	location: String,
	country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
