const schema = require('./page');

const Brief = "description createdAt updatedAt tag";
const Detail = "content";
const Creat = "description content tag";
const Edit = "description content tag";
const TextSearch = "description content";
const Index = "description";

const views = [Brief, Detail, Creat, Edit, TextSearch, Index];

module.exports = {
  schema,
  views, 
  name: 'Page',
  mraUI: {
    detailType: 'page',
    listType: 'table', // list, table, or grid
    defaultListSort: {'updatedAt': 'desc'},
  },
};
