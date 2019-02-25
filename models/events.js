var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EventSchema = new Schema ({
	date: {
		type: String,
		required:true,
		unique: true,
	},
	name: {
		type: String,
        required: true,
        unique: true

	},
	address1: {
		type: String,
		required: true,
    },
    address2: {
		type: String,
		required: true,
    },
    city: {
		type: String,
		required: true,
    },
    state: {
		type: String,
        required: true,
        maxlength: 2,
    },
    game: {
		type: String,
		required: true,
    },
    console: {
		type: String,
		required: true,
    },
    description: {
		type: String,
		required: false,
    },
    imgSrc: {
		type: String,
		required: false,
    },
    optional1: {
		type: String,
		required: false,
    },
    optional2: {
		type: String,
		required: false,
    },
    attendanceLimit: {
		type: Number,
		required: false,
    },
	comment: [{ 
		type : Schema.Types.ObjectId, 
		ref: "Comment" 
	}]
});

var Event = mongoose.model("event", EventSchema);

module.exports = Event;
