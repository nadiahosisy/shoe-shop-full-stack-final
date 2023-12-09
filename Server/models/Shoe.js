const mongoose = require("mongoose");

const ShoeSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        try {
          new URL(value);
          return true;
        } catch (error) {
          return false;
        }
      },
      message: "Invalid URL for the image field",
    },
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Shoe = mongoose.model("Shoe", ShoeSchema, "Shoes");

module.exports = Shoe;
