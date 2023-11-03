const Booking = require("../models/bookingModel")

const fetchBookings = async (req, res) => {
    const bookings = await Booking.find();
    res.json({ bookings });
}

const fetchBooking = async (req, res) => {
    const bookingId = req.params.id;
    const booking = await Booking.findById(bookingId);
    res.json({ booking })
}

const createBooking = async (req, res) => {
    const {fname, lname, email, date, time} = req.body;

const booking = await Booking.create({
        fname,
        lname,
        email,
        date,
        time,
    })
    res.json({ booking })
}

const deleteBooking = async (req, res) => {
    const bookingId = req.params.id;

    await Booking.deleteOne({ _id: bookingId });
 
    res.json({ success: "Record deleted" });
}

module.exports = {
    fetchBookings,
    fetchBooking,
    createBooking,
    deleteBooking,
}