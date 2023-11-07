if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

const express = require("express");

const server = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const connectToDB = require("./config/database");

const bookingsController = require("./contollers/bookingController")
const usersController = require("./contollers/usersController");
const requireAuth = require(".//middleware/requireAuth");

server.use(express.json());
server.use(cookieParser());
server.use(cors({
    origin: true,
    credentials: true,
}));

connectToDB();

server.post("/register", usersController.register);
server.post("/login", usersController.login);
server.get("/logout", usersController.logout);
server.get("/check-auth", requireAuth, usersController.checkAuth);

server.get("/bookings", bookingsController.fetchBookings );
server.get("/bookings/:id", bookingsController.fetchBooking);
server.post("/bookings", bookingsController.createBooking);
server.delete("/bookings/:id", bookingsController.deleteBooking);


server.listen(process.env.PORT);