const shortid = require("shortid");
const Template = require("./template.model");

const generateLink = async () => {
  const result = await Template.findOne().sort({ _id: -1 });
  let id = 0;
  if (result) {
    id = parseInt(result?.template_link.slice(0, 1));
  }
  return `${id + 1}${shortid.generate()}`;
};

module.exports = {
  generateLink,
};
