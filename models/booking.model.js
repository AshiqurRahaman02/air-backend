const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: "User" },
	flight: { type: Schema.Types.ObjectId, ref: "Flight" },
});

const BookingModel = mongoose.model("booking", bookingSchema);

module.exports = {
	BookingModel,
};
