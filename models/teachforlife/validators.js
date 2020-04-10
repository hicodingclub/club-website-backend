const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

const validatePhone = function(phone) {
    var re = /^(\d+-?)+\d+$/;
    return re.test(phone)
}

const emailValidate = [
    { validator: validateEmail, msg: "Please fill a valid email address." },
];
const phoneValidate = [
    { validator: validatePhone, msg: "Please fill a valid phone number." },
];

module.exports = {
    emailValidate,
    phoneValidate,
    validateEmail,
    validatePhone,
};