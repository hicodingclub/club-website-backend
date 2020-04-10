const schema = require('./enrollment');

var brief = "name email grade status tutor createdAt";
var detail = "name email phoneNumber grade status notes tutor createdAt";
var create = "name email phoneNumber grade notes tutor";
var edit = "name email phoneNumber grade notes tutor";
var textSearch = "name";
var index = "name"; //let's temporarily put any field here since this schema is not referred. 

var views = [brief, detail, create, edit, textSearch, index]

//Export model
module.exports = {
    schema,
    views,
    name: 'Sign Up',
    api: 'LCRUDE', //E - export
};