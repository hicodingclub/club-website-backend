const schema = require('./confirmation');
const filters = require('./confirmation-filters');

var brief = "name email type enrollment confirmed createdAt";
var detail = "name email type enrollment confirmed createdAt";
var create = "name email type enrollment confirmed";
var edit = "confirmed";
var textSearch = "email";
var index = "email"; //let's temporarily put any field here since this schema is not referred. 

var views = [brief, detail, create, edit, textSearch, index]

//Export model
module.exports = {
    schema,
    views,
    name: 'Confirmation for Summer Program',
    // patch: ['muser_id'], //field is member which is already defined, so no need to patch
    api: 'CU', //no api defined for frontend.
    mraUI: {
        api: 'N', // front end no UI. Only service
    },
    mraBE: {
        filters,
    }
};