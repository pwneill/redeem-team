var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RegistrationSchema = new Schema ({ 
	Name: String,
	Email: String,
	Phone: Number,
	Q1: String,
	Q2: String
});

var Register = mongoose.model("Register", RegistrationSchema);

module.exports = Register;