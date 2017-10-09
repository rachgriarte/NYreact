const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  topic: { type: String, required: true },
  startYear: { type: String, required: true },
  url: {type: String}
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
