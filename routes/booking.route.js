const express = require("express");
const { BookingModel } = require("../models/booking.model");

require("dotenv").config();

const bookingRouter = express.Router();

bookingRouter.post("/api/booking", async (req, res) => {
	const newBookingData = req.body;
	try {
		const newBooking = await BookingModel.create(newBookingData);
        
		res.status(201).json({
			isError: false,
			message: "Flight booked successfully",
			newBooking,
		});
	} catch (error) {
		res.status(400).json({ isError: true, error: error.message });
	}
});

bookingRouter.get("/api/dashboard", async (req, res) => {
	try {
		const bookings = await BookingModel.find().populate("user flight");
		res.status(200).json({ isError: false, bookings });
	} catch (error) {
		res.status(500).json({ isError: true, error: error.message });
	}
});

bookingRouter.put("/api/dashboard/:id", async (req, res) => {
	const bookingId = req.params.id;
	const updatedBookingData = req.body;
	try {
		await BookingModel.findByIdAndUpdate(bookingId, updatedBookingData);
		res.status(204).json({
			isError: false,
			message: "Booking updated successfully",
		});
	} catch (error) {
		res.status(500).json({ isError: true, error: error.message });
	}
});

bookingRouter.delete("/api/dashboard/:id", async (req, res) => {
	const bookingId = req.params.id;
	try {
		await BookingModel.findByIdAndDelete(bookingId);
		res.status(202).json({
			isError: false,
			message: "Booking deleted successfully",
		});
	} catch (error) {
		res.status(500).json({ isError: true, error: error.message });
	}
});

module.exports = {
	bookingRouter,
};
