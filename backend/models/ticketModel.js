const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product: {
      type: String,
      required: [true, "Please select a product"],
      enum: ["Phone", "Laptop", "Tablet", "Console"],
    },
    description: {
      type: String,
      required: [true, "Please enter a description of the product issue"],
    },
    status: {
      type: String,
      required: true,
      enum: ["New", "Open", "Closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
