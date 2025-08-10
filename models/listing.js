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
		set: (V) =>
			v === ""
				? "default lhttps://i0.wp.com/picjumbo.com/wp-content/uploads/wooden-pedestal-table-in-nature-for-product-photography-free-image.jpeg?w=600&quality=80"
				: V,
	},
	price: Number,
	location: String,
	coutry: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
