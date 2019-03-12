const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scrapeSchema = new Schema({
  title: { type: String, required: true },
  body: String,
  img: String,
  link: String,
  origin: String,
  user: String,
  date: { type: Date, default: Date.now }
});

const Scrape = mongoose.model("Scrape", scrapeSchema);

module.exports = Scrape;