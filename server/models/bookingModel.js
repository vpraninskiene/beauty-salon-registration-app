const mongoose = require("mongoose");


const bookingSchema = new mongoose.Schema({
	fname: {
		type: String,
		required: true,
	},
	lname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
});

 const Booking = mongoose.model("Booking", bookingSchema);

 module.exports = Booking;