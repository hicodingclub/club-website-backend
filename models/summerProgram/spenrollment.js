var mongoose = require('mongoose');
const { validateEmail, validatePhone, emailValidate, phoneValidate } = require('../validators');

var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        mraEmailRecipient: true, // if this email can be used by sendEmail Action 
        validate: {
            validator: validateEmail,
            message: 'Please fill a valid email address',
        },
    },
    phoneNumber: {
        type: String,
        required: true,
        validate: {
            validator: validatePhone,
            message: 'Please fill a valid phone number'
        }
    },
    grade: { type: Number, required: true },
    status: {
        type: String,
        enum: ['processing', 'paid', 'confirmed', 'cancelled'],
        default: 'processing',
        required: true
    },
    notes: { type: String, textarea: true, description: 'please leave anything you want us to know' },
    adminNotes: { type: String, textarea: true, description: 'notes for admin only' },
}, {
    timestamps: true
});

module.exports = schema;