const mongoose = require("mongoose");

const TemplateSchema = new mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: false,
    // },

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
    // template_img: {
    //   type: String,
    //   required: true,
    // },
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
