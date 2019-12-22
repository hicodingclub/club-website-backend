const schema = require('./event');

const brief = "signaturePicture title author publishDate";
const detail = "signaturePicture title author publishDate content"; //sequence is critical for mraUI detailType 'post'
const create = "title author content signaturePicture";
const edit = "title author content signaturePicture";
const textSearch = "title author content" 
const index = "title";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
  schema,
  views,
  name: 'Event and News',

  mraUI: {
    detailType: 'post', //use the post view in detailed page
    listType: 'list', // list, table, or grid
    listToDetail: 'click', // link, click, or none
    defaultListSort: {'publishDate': 'desc'},
  },
};