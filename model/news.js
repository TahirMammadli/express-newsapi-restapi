const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const newsSchema = new Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("News", newsSchema);
