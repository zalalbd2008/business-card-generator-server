const Ticket = require("./ticket.model");

const createTicket = async (req, res) => {
  try {
    const newTicket = new Ticket(req.body);
    const result = await newTicket.save();
    res.status(200).json({
      success: true,
      message: "Ticket Create Success",
      data: result,
    });
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Ticket Create Failed",
      error_message: error.message,
    });
  }
};

const getTickets = async (req, res) => {
  try {
    const result = await Ticket.find({}).sort({ _id: -1 });
    res.status(200).json({
      success: true,
      message: "Ticket Retrieve Success",
      data: result,
    });
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Ticket Retrieve Failed",
      error_message: error.message,
    });
  }
};

const getTicketById = async (req, res) => {
  try {
    const result = await Ticket.findOne({
      _id: req.params.id,
    });
    res.status(200).json({
      success: true,
      message: "Ticket Retrieve Success",
      data: result,
    });
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Ticket Retrieve Failed",
      error_message: error.message,
    });
  }
};

const matchTicket = async (req, res) => {
  try {
    const isExist = await Ticket.findOne({
      _id: req.params.id,
    });
    if (isExist) {
      if (isExist.email === req.body.email && isExist.code === req.body.code) {
        res.status(200).json({
          success: true,
          message: "Ticket Retrieve Success",
          valid: true,
          data: isExist,
        });
      } else {
        res.status(201).json({
          success: false,
          message: "Ticket Credentials Not Valid",
          valid: false,
          data: null,
        });
      }
    } else {
      res.status(404).json({
        success: true,
        message: "Ticket Not Found",
        data: null,
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Ticket Retrieve Failed",
      error_message: error.message,
    });
  }
};

module.exports = {
  createTicket,
  getTickets,
  getTicketById,
  matchTicket,
};
