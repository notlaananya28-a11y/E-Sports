const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const {
  username,
  email,
  password,
} = req.body;

    const userExists =
      await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "Email Exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = new User({
  username,
  email,
  password: hashedPassword,
});

    await user.save();

    res.json({
      message: "Registered Successfully",
    });
  } catch {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user =
      await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User Not Found",
      });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(400).json({
        message: "Wrong Password",
      });
    }

    const token = jwt.sign(
{
  id: user._id,
},
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      token,
    });
  } catch {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;