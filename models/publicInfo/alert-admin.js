const schema = require('./alert');

const brief = "name show order";
const detail = "name description linkName linkURL show order";
const create = "name description linkName linkURL show order";
const edit = "name description linkName linkURL show order";
const textSearch = "name"
const index = "name";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
    schema,
    views,
    name: 'Alert',

    mraUI: {
        listType: 'table', // list, table, or grid
        listToDetail: 'click', // link, click, or none
        defaultListSort: { 'order': 'asc' },
    },
};