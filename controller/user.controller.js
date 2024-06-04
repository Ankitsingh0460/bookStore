const USER = require("../models/user.model");
const bcryptjs = require("bcryptjs");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await USER.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const users = await USER.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    return res.status(201).json({
      message: "Signup sucessfull",
      users: {
        _id: users._id,
        name: users.name,
        email: users.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await USER.findOne({ email });
    const isMatchPassword = await bcryptjs.compare(password, user.password);
    if (!user || !isMatchPassword) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    } else {
      res.status(200).json({
        message: "Login Successfull",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("error" + error);
  }
};

module.exports = {
  signup,
  login,
};
