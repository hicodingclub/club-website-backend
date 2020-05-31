const schema = require('./alert');

const brief = "name description linkName linkURL show order";
const detail = "name description linkName linkURL show order";
const create = "name description linkName linkURL show order";
const edit = "name description linkName linkURL show order";
const textSearch = "name"
const index = "name";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
    schema,
    views,
    api: "L",
    listWidgets: [],
    mraUI: {
        listType: 'list', // list, table, or grid
        listToDetail: 'none', // link, click, or none
        defaultListSort: { 'order': 'asc' },
    },
    mraBE: {
        searchObj: {
            show: true,
        }
    }
};