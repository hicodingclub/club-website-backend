const schema = require('./page');

const Brief = "description content tag"; //return content so front end can search based tag
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
  api: 'LR',
  mraUI: {
    detailType: 'page',
  },
};
