const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: String,
  author: String,
  genre: String,
});

const BooksList = mongoose.model("BooksList", bookSchema);

module.exports = { BooksList };