const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    question: {type: String, required: true},
    answer: {type: String, editor: true, required: true},
    order: {type: Number, required: true},
    enable: {type: Boolean, required: true, default: false}
  }
);

module.exports = schema;
