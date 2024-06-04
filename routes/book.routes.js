const { getBooks } = require("../controller/book.controller");
const { Router } = require("express");
const route = Router();

route.get("/", getBooks);

module.exports = route;
