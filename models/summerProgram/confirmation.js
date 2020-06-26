var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        mraEmailRecipient: true, // if this email can be used by sendEmail Action 
    },
    type: {type: String,},
    confirmed: {
        type: Number,
        default: '-1'
    },
    enrollment: {type: Schema.Types.ObjectId, ref: 'SPEnrollment', required: false},
}, {
    timestamps: true
});

module.exports = schema;