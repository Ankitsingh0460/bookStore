const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  { timestamps: true }
);

const Books = model("book", bookSchema);

module.exports = Books;
