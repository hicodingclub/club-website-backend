const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true, maxlength: 1000, textarea: true, },
    signaturePicture: {type: String,  required: false,
      mraType: 'picture', mraSharable: true},
    tag: {type: String, required: false, maxlength: 50},
  }
);

module.exports = schema;
