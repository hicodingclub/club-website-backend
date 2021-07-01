const schema = require('./sites');
const zInterfaces = require('./sites-z');
const {fieldMeta, selectors} = require('./sites-selectors');

var brief = 'name<siteLink> ready enabled projectFile createdAt';
var detail = 'name<siteLink> ready enabled (muser_id) createdAt updatedAt';
var create = 'name enabled (muser_id) (projectFile)';
var edit = 'name<readOnly> (projectFile) enabled';
var textSearch = 'name';
var index = 'name'; //let's temporarily put any field here since this schema is not referred.

var views = [brief, detail, create, edit, textSearch, index];

//Export model
module.exports = {
  schema,
  views,
  name: 'Site',

  //patch: ['muser_id'], //add muser_id to the schema
  owner: { enable: true, type: 'user', field: 'muser_id' },

  api: 'LCRUD',
  mraUI: {
    listType: 'list', // table, list, or grid

    disableListSearch: true, // not show the search bar
    listActionButtons: ['', ''],
    listTitle: 'Your Websites',
    defaultListSort: { createdAt: 'desc' },

    detailActionButtons: ['', '', ''],
    detailRefName: {
      // if being referenced, what name to show
    },

    detailTitle: 'Your website',
    //detailActions: [["Make Payment", "/actions/pay"]],
  },

  fieldMeta,
  selectors,
  mraBE: {
    zInterfaces,
  }
};
