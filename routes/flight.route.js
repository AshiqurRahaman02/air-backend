const express = require("express");
const { FlightModel } = require("../models/flight.model");

require("dotenv").config();

const flightRouter = express.Router();

flightRouter.get("/api/flights", async (req, res) => {
	try {
		const flights = await FlightModel.find();
		res.status(200).json({ isError: false, flights });
	} catch (error) {
		res.status(500).json({
			isError: true,
			error: error.message,
		});
	}
});

flightRouter.get("/api/flights/:id", async (req, res) => {
	const flightId = req.params.id;
	try {
		const flight = await FlightModel.findById(flightId);
		if (flight) {
			res.status(200).json({ isError: false, flight });
		} else {
			res.status(404).json({ isError: true, error: "Flight not found." });
		}
	} catch (error) {
		res.status(500).json({
			isError: true,
			error: error.message,
		});
	}
});

flightRouter.post("/api/flights", async (req, res) => {
	const newFlightData = req.body;
	try {
		const newFlight = await FlightModel.create(newFlightData);
		res.status(201).json({
			isError: false,
			newFlight,
			message: "Flight created successfully",
		});
	} catch (error) {
		res.status(400).json({ isError: true, error: error.message });
	}
});

flightRouter.put("/api/flights/:id", async (req, res) => {
	const flightId = req.params.id;
	const updatedFlightData = req.body;
	try {
		await FlightModel.findByIdAndUpdate(flightId, updatedFlightData);
		res.status(204).json({
			isError: false,
			message: "Flight updated successfully.",
		});
	} catch (error) {
		res.status(500).json({
			isError: true,
			error: error.message,
		});
	}
});

flightRouter.delete("/api/flights/:id", async (req, res) => {
	const flightId = req.params.id;
	try {
		await FlightModel.findByIdAndDelete(flightId);
		res.status(202).json({
			isError: false,
			message: "Flight deleted successfully.",
		});
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
});

module.exports = {
	flightRouter,
};
