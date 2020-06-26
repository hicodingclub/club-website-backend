const schema = require('./spenrollment');
const emailer = require('./spenrollment-emailing');

var brief = "name email grade status createdAt";
var detail = "name email";
var create = "name email phoneNumber grade notes";
var edit = "name email phoneNumber grade notes";
var textSearch = "name";
var index = "name"; //let's temporarily put any field here since this schema is not referred. 

var views = [brief, detail, create, edit, textSearch, index]

//Export model
module.exports = {
    schema,
    views,
    name: 'Sign Up for Summer Program',
    // patch: ['muser_id'], //field is member which is already defined, so no need to patch
    api: "CR",
    mraUI: {
        api: "C",

        listType: 'table', // table, list, or grid

        disableListSearch: true, // not show the search bar
        listActionButtons: ['', ''],
        listTitle: 'Your Program Enrollments',
        defaultListSort: { 'createdAt': 'desc' },

        detailActionButtons: ['', '', ''],
        detailRefName: { // if being referenced, what name to show
            'Enrollment': 'Enrolled Classes',
        },

        detailTitle: 'Sign Up for Tutoring',
        //detailActions: [["Make Payment", "/actions/pay"]],

        selectActionViewType: 'grid', // select extraView type: dropdown, grid, table, list
    },
    mraBE: {
        emailer, //email templates to create during app start up from backend.
    }
};