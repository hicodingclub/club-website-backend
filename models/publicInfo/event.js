const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: {type: String, required: true, maxlength: 100},
    author: {type: String, required: true, maxlength: 50},
    publishDate: { type: Date, default: Date.now },
    content: { type: String, editor: true, required: true },
    signaturePicture: {type: String,  required: true,
      mraType: 'picture', mraSharable: true},
  }
);

module.exports = schema;