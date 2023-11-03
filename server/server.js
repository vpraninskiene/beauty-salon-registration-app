if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

const express = require("express");

const server = express();
const cors = require("cors");

const connectToDB = require("./config/database");
const bookingsController = require("./contollers/bookingController")

server.use(express.json());
server.use(cors());

connectToDB();

server.get("/bookings", bookingsController.fetchBookings );
server.get("/bookings/:id", bookingsController.fetchBooking);
server.post("/bookings", bookingsController.createBooking);
server.delete("/bookings/:id", bookingsController.deleteBooking);


server.listen(process.env.PORT);