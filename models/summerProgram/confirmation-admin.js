const schema = require('./confirmation');

var brief = "name email type enrollment confirmed createdAt";
var detail = "name email type enrollment confirmed createdAt";
var create = "name email type enrollment confirmed";
var edit = "name email type enrollment confirmed";
var textSearch = "email";
var index = "email"; //let's temporarily put any field here since this schema is not referred. 

var views = [brief, detail, create, edit, textSearch, index]

//Export model
module.exports = {
    schema,
    views,
    name: 'Confirmation',
    api: 'LCRUDM', //E - export
    mraUI: {
        listType: 'table',
        defaultListSort: {'createdAt': 'desc'},

        ownSearchStringFields: ['type'], //list of strings that should have own search field in the search area
    },
};