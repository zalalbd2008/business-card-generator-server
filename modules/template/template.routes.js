const express = require("express");
const {
  createTemplate,
  getTemplateById,
  sendSourceCode,
  updateTemplateById,
} = require("./template.controller");
const router = express.Router();

router.post("/create", createTemplate);
router.get("/:template_link", getTemplateById);
router.post("/send-source-code", sendSourceCode);
router.patch("/:id", updateTemplateById);

module.exports = router;
