const schema = require('./spenrollment');

var brief = "name email grade status createdAt";
var detail = "name email phoneNumber grade status notes adminNotes createdAt";
var create = "name email phoneNumber status grade notes adminNotes";
var edit = "name email phoneNumber status grade notes adminNotes";
var textSearch = "name";
var index = "name"; //let's temporarily put any field here since this schema is not referred. 

var views = [brief, detail, create, edit, textSearch, index]

//Export model
module.exports = {
    schema,
    views,
    name: 'Sign Up',
    api: 'LCRUDEM', //E - export
    mraUI: {
        listType: 'table',
        defaultListSort: {'createdAt': 'desc'},  
    },
};