const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    email: {
      type: Object,
      required: true,
    },
    url: {
      type: String,
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
