var mongoose = require('mongoose');
const { validateEmail, validatePhone, emailValidate, phoneValidate } = require('./validators');

var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String, required: true },
    introduction: { type: String, required: true, textarea: true },
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
        validate: {
            validator: validatePhone,
            message: 'Please fill a valid phone number'
        }
    },
    // mraType: a link to a picture; mraPresent: present the picture; mraSharable: if the picture is sharable with other items
    photo: {
        type: String,
        required: true,
        mraType: 'picture',
        mraSharable: false
    },
    grade: { type: Number, required: true },
    availableTime: { type: String, required: true, textarea: true },
    acceptGrade: { type: String, required: true, description: 'Open to Students of the Following Grades' },
    specificSubjects: { type: String, required: true, textarea: true },
});

const validators = {
    "email": emailValidate,
    "phoneNumber": phoneValidate,
}
schema.mddsValidators = validators;

module.exports = schema;