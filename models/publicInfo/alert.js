const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true, maxlength: 50 },
    description: { type: String, textarea: true, required: true, maxlength: 200 },
    linkName: { type: String, maxlength: 50 },
    linkURL: { type: String, required: false },
    show: { type: Boolean, default: false },
    order: { type: Number, required: true },
});

module.exports = schema;