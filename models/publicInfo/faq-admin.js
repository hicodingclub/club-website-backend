const schema = require('./faq');

const Brief = "question answer order enable";
const Detail = "question | answer | order | enable";
const Creat = "question answer order enable";
const Edit = "question answer order enable";
const TextSearch = "question";
const Index = "question";

const views = [Brief, Detail, Creat, Edit, TextSearch, Index];

module.exports = {
  schema,
  views,
  name: 'FAQ',
  mraUI: {
    listType: 'list', // list, table, or grid
    defaultListSort: {'order': 'asc'},
  },
};
