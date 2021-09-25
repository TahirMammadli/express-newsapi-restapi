const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const savedNewsSchema = new Schema({
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

module.exports = mongoose.model("SavedNews", savedNewsSchema);
