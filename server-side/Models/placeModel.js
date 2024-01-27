import mongoose from "mongoose";
const placeSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  address: String,
  photos: [String],
  description: String,
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuests: Number,
});

const placeModel = mongoose.model("Place", placeSchema);

export default placeModel;
