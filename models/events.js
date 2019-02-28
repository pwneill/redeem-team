var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EventSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: false
  },
  LocationName: {
    type: String,
    required: false
  },
  AddressLine1: {
    type: String,
    required: false
  },
  AddressLine2: {
    type: String,
    required: false
  },
  City: {
    type: String,
    required: false
  },
  State: {
    type: String,
		required: false,
		maxlength: 2
  },
  Zip: {
    type: Number,
		required: false,
		maxLength: 5
  },
  Game: {
    type: String,
    required: false
  },
  Console: {
    type: String,
    required: false
  },
  Description: {
    type: String,
    required: false
  },
  ImgSrc: {
    type: String,
    required: false
  },
  Q1: {
    type: String,
    required: false
	},
	Q2: {
    type: String,
    required: false
	},
	Limit: {
    type: Number,
    required: false
  },
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

var Event = mongoose.model("Event", EventSchema);

module.exports = Event;
