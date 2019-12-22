const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: {type: String, required: false},
    subtitle: {type: String, required: false},
    description: {type: String, required: false, maxlength: 1000},
    signaturePicture: {type: String,  required: false,
      mraType: 'picture', mraSharable: true},
    tag: {type: String, required: false, maxlength: 50},
  }
);

module.exports = schema;