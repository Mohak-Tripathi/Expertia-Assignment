const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    position: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    new: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    postedAt: { type: String, required: true },
    contract: { type: String, required: true },

    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
      default: 0,
    },
    expectedctc: {
      type: Number,
      required: true,
      default: 5,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
