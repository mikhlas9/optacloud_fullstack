const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  houseNumber: { type: String, required: true },
  roadArea: { type: String, required: true },
  category: { type: String, required: true, enum: ["Home", "Office", "Friends & Family"] },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  isFavorite: { type: Boolean, default: false },
});

module.exports = mongoose.model("Address", AddressSchema);
