const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Untitled",
    required: true,
  },
  articleBody: {
    type: String,
    default: "Lorem Ipsum Dolor",
  },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
