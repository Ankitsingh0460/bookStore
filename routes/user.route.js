const express = require("express");
const route = express.Router();
const { signup, login } = require("../controller/user.controller");

route.post("/signup", signup);
route.post("/login", login);
module.exports = route;
