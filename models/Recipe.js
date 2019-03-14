const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const RecipeSchema = new Schema({
  img: {
    data: Buffer,
    contentType: String
  },
  title: {
    type: String,
    uniquie: true,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Recipe = mongoose.model("recipe", RecipeSchema);
