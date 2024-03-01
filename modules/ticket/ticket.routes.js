const express = require("express");
const {
  createTicket,
  getTicketById,
  getTickets,
  matchTicket,
  removeTicket,
  getTicketByToken,
} = require("./ticket.controller");

const router = express.Router();

router.post("/create", createTicket);
router.get("/", getTickets);
router.get("/:id", getTicketById);
router.get("/ticket-info/:token", getTicketByToken);
router.post("/isMatched", matchTicket);
router.delete("/:id", removeTicket);

module.exports = router;
