const schema = require('./sites');

var brief = 'name ready enabled muser_id createdAt';
var detail = 'name ready enabled projectFile muser_id<userLink> createdAt updatedAt';
var create = 'name enabled muser_id';
var edit = 'name<readOnly> muser_id<userLink> ready<readOnly> enabled';
var textSearch = 'name';
var index = 'name'; //let's temporarily put any field here since this schema is not referred.

var views = [brief, detail, create, edit, textSearch, index];

//Export model
module.exports = {
  schema,
  views,
  name: 'Site',

  //patch: ['muser_id'], //add muser_id to the schema
  //owner: { enable: true, type: 'user', field: 'muser_id' },

  api: 'LCRUD',
  mraUI: {
    listType: 'table', // table, list, or grid

    defaultListSort: { createdAt: 'desc' },
  },

  fieldMeta: {
    readOnly: {
      readOnly: true,
    },
    userLink: {
      readOnly: true,

      innerHtml: true,
      pipe: 'MddsAnchorPipe',
    }
  },
  selectors: {
    MddsAnchorPipe: {
      selector: 'mddsAnchor',
      module: 'MddsCoreModule', //MddsCoreModule. Already imported. So skip it.
      package: '@hicoder/angular-core',
      inputs: [{
        key: 'urlTemplate',
        value: '/users/muser/detail/[REPLACEME]'
      }, {
        key: 'displayTemplate',
        value: '[REPLACEME]'
      }],
    }
  },
};
