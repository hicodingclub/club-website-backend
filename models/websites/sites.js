const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 20, },
    muser_id: { type: String, required: true, },
    projectFile: { type: String, },
    ready: { type: Boolean, default: false, description: 'Indicate if the site is ready to be enabled.'},
    message: { type: String, description: 'Information to show to end users during website setup.'},
    enabled: { type: Boolean, default: true, required: true, important: 'Set to NO to disable the website so it cannot be accessed.'},
}, {
    timestamps: true
});
schema.index({ name: 1}, {unique: true}); // schema level
schema.index({ muser_id: 1}, {unique: true}); // schema level

module.exports = schema;