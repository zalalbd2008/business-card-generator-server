const express = require("express");
const { createTemplate, getTemplateById } = require("./template.controller");
const router = express.Router();

router.post("/create", createTemplate);
router.get("/:template_link", getTemplateById);

module.exports = router;
