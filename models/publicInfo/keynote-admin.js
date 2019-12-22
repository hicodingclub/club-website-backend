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
  mraUI: {
    detailType: 'slide', //use the slide view in detailed page
    listType: 'list', // list, table, or grid
    defaultListSort: {'title': 'asc'},
  },
};
