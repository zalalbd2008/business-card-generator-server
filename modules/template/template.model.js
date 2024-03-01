const mongoose = require("mongoose");

const TemplateSchema = new mongoose.Schema(
  {
    email: {
      type: Object,
      required: true,
    },
    template: {
      type: Object,
      required: true,
    },
    template_no: {
      type: String,
      required: true,
    },
    dcard_id: {
      type: Number,
      required: true,
      default: 1,
    },
    template_link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Template = mongoose.model("Template", TemplateSchema);
module.exports = Template;
