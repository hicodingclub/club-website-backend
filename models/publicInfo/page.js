const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    description: {type: String, required: true, maxlength: 100, description: 'Brief description of the page', },
    content: {type: String, required: true, editor: true, },
    tag: {type: String, required: false, maxlength: 50},
  },
  {
    timestamps: true
  }
);

module.exports = schema;
