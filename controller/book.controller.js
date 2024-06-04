const Books = require("../models/book.model");

const getBooks = async (req, res) => {
  try {
    const book = await Books.find({});
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getBooks,
};
