const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SeerArticle = new Schema({
  // id: {
  //     type: Number
  // },
  title: {
    type: String,
  },
  URL: {
    type: String,
  },
  status: {
    type: String,
  },
  date: {
    type: Date,
  },
  author: {
    type: String,
  },
  Year: {
    type: Number,
  },
  method: {
    type: String,
  },
  SEbenefits: {
    type: String,
  },
});

module.exports = mongoose.model("SeerArticle", SeerArticle);
