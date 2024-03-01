const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    email: {
      type: Object,
      unique: true,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
