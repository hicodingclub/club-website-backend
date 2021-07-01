const schema = require('./keynote');

const Brief = "signaturePicture title subtitle description tag";
const Detail = "signaturePicture | title | subtitle | description "; // sequence is critical for mraUI type 'slidesubtitle'
const Creat = "title subtitle description signaturePicture tag";
const Edit = "title subtitle description signaturePicture tag";
const TextSearch = "title";
const Index = "title";

const views = [Brief, Detail, Creat, Edit, TextSearch, Index];

module.exports = {
  schema,
  views, 
  name: 'Key Notes',
  api: 'LR',
  listWidgets: ['sld'], //home - home page list view, s: select view for pipeline/composite, d: slides list view
  mraUI: {
    listWidgets: {
      'view-only': {
        views: ['sld'],
      },
    },
    listWidgetTypes: {
      general: 'view-only',
    },
    defaultListSort: {'title': 'asc'},
    publicListFilter: {},
    homeListNumber: 3,
  },
};
