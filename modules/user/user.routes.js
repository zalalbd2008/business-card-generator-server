const express = require("express");
const {
  loginUser,
  getUser,
  getUserInfo,
  registerUser,
} = require("./user.controller");
const { isAuth } = require("../../utils/middleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUser);
router.get("/user-info/me", isAuth, getUserInfo);

module.exports = router;
