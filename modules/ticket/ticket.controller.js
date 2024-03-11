const { generateTicketToken, getTicketToken } = require("../../utils/auth");
const { sendTicketMail } = require("../../utils/sendMail");
const Template = require("../template/template.model");
const Ticket = require("./ticket.model");

const createTicket = async (req, res) => {
  try {
    const isExist = await Ticket.findOne({ email: req.body.email });
    if (isExist) {
      return res.status(200).json({
        success: false,
        type: "Email",
        message: "Email Already in use",
      });
    } else {
      const newTicket = new Ticket(req.body);
      const isSended = await sendTicketMail({
        ...req.body,
        url: `${process.env.CLIENT_URL}/ticket-verification/new`,
      });
      if (isSended) {
        const result = await newTicket.save();
        res.status(200).json({
          success: true,
          message: "Ticket Create Success",
          data: result,
        });
      }
    }
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
    const template = await Template.findOne({ email: result?.email });
    res.status(200).json({
      success: true,
      message: "Ticket Retrieve Success",
      data: result,
      template: template,
    });
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Ticket Retrieve Failed",
      error_message: error.message,
    });
  }
};

const getTicketByToken = async (req, res) => {
  try {
    const tokenData = await getTicketToken(req.params.token);
    const result = await Ticket.findOne({
      _id: tokenData?._id,
    });
    const template = await Template.findOne({ email: result?.email });
    res.status(200).json({
      success: true,
      message: "Ticket Retrieve Success",
      data: result,
      template: template,
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
      email: req.body.email,
      code: req.body.code,
    });
    if (isExist) {
      if (isExist.email === req.body.email && isExist.code === req.body.code) {
        const token = await generateTicketToken(isExist);
        const template = await Template.findOne({ email: isExist?.email });
        res.status(200).json({
          success: true,
          message: "Ticket Retrieve Success",
          valid: true,
          token: token,
          data: isExist,
          template: template,
        });
      }
    } else {
      res.status(201).json({
        success: true,
        message: "Ticket Credentials Not Valid",
        valid: false,
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

const removeTicket = async (req, res) => {
  try {
    const isExist = await Ticket.findOne({
      _id: req.params.id,
    });
    if (isExist) {
      const result = await Ticket.findByIdAndDelete({ _id: req.params.id });
      res.status(200).json({
        success: true,
        message: "Ticket Retrieve Success",
        data: result,
      });
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
      message: "Ticket Remove Failed",
      error_message: error.message,
    });
  }
};

module.exports = {
  createTicket,
  getTickets,
  getTicketById,
  matchTicket,
  removeTicket,
  getTicketByToken,
};
