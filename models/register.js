const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
  Name: { type: String, required: true },
  Email: String,
  Phone: Number,
  HaveController: Boolean,
  BringController: Boolean,
  HaveConsole: Boolean,
  HaveGame: Boolean,
  EventID: String,
  date: { type: Date, default: Date.now }
});

const Register = mongoose.model("Register", registerSchema);

module.exports = Register;