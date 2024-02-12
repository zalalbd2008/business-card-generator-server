const express = require("express");
const {
  createTicket,
  getTicketById,
  getTickets,
  matchTicket,
} = require("./ticket.controller");

const router = express.Router();

router.post("/create", createTicket);
router.get("/", getTickets);
router.get("/:id", getTicketById);
router.post("/isMatched/:id", matchTicket);

module.exports = router;
