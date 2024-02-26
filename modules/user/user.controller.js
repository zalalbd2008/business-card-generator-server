const User = require("./user.model");
const bcrcypt = require("bcryptjs");
const { generateToken } = require("../../utils/auth");

const registerUser = async (req, res) => {
  // console.log(req.body);
  try {
    const isExist = await User.findOne({ email: req.body.email });
    if (isExist) {
      res.status(201).send({
        success: false,
        message: "Email already in use",
        status: 201,
      });
    } else {
      const newUser = new User({
        email: req.body.email,
        password: bcrcypt.hashSync(req.body.password),
        role: req.body.role,
      });
      const user = await newUser.save();
      res.status(200).send({
        success: true,
        message: "User Create successfully",
        status: 200,
        data: user,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

// get user info by token verified => email
const getUserInfo = async (req, res) => {
  console.log(req.user);
  try {
    const user = await User.findOne({ _id: req?.user?._id });
    if (user) {
      res.send(user);
    } else {
      res.send("User Not Found");
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({
        success: false,
        type: "email",
        message: "User not found",
      });
    }

    if (user && bcrcypt.compareSync(req.body.password, user.password)) {
      const accessToken = await generateToken(user);
      return res.send({
        success: true,
        message: "Logged in successfully",
        status: 200,
        user,
        accessToken,
      });
    } else {
      res.status(401).send({
        success: false,
        type: "password",
        message: "Invalid user or password",
        status: 401,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, {
      email: 1,
      role: 1,
    });
    res.send(user);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  getUserInfo,
};
