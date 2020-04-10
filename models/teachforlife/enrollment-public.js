const schema = require('./enrollment');

var brief = "name email grade status createdAt";
var detail = "name email phoneNumber grade status notes createdAt tutor";
var create = "name email phoneNumber grade notes (tutor)";
var edit = "name email phoneNumber grade notes (tutor)";
var textSearch = "name";
var index = "name"; //let's temporarily put any field here since this schema is not referred. 

var views = [brief, detail, create, edit, textSearch, index]

//Export model
module.exports = {
    schema,
    views,
    name: 'Sign Up for Tutoring',
    // patch: ['muser_id'], //field is member which is already defined, so no need to patch
    api: "C",
    mraUI: {
        listType: 'table', // table, list, or grid

        disableListSearch: true, // not show the search bar
        listActionButtons: ['', ''],
        listTitle: 'Your Class Enrollments',
        defaultListSort: { 'createdAt': 'desc' },

        detailActionButtons: ['', '', ''],
        detailRefName: { // if being referenced, what name to show
            'Enrollment': 'Enrolled Classes',
        },

        detailTitle: 'Sign Up for Tutoring',
        //detailActions: [["Make Payment", "/actions/pay"]],

        selectActionViewType: 'grid', // select extraView type: dropdown, grid, table, list
    },
};