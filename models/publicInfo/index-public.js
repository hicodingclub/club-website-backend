let eventDef = require('./event-public');
let generalInfoDef = require('./generalInfo-public');
let keyNoteDef = require('./keynote-public');
let faqDef = require('./faq-public');
let articleDef = require('./article-public');
let pageDef = require('./page-public');
let alertDef = require('./alert-public');

const schemas = {
    'GeneralInfo': generalInfoDef,
    'Faq': faqDef,
    'Event': eventDef,
    'KeyNote': keyNoteDef,
    'Article': articleDef,
    'Page': pageDef,
    'Alert': alertDef,
};

const config = {
    dateFormat: 'MM-DD-YYYY',
    timeFormat: 'hh:mm:ss'
}

const authz = {
    'module-authz': { 'LoginUser': 'R', 'Anyone': 'R' }
}

const DB_CONFIG = {
    APP_NAME: process.env.APP_NAME,
    MODULE_NAME: __dirname.split('/').slice(-1)[0], //last part of the dir
};

module.exports = { schemas, config, authz, DB_CONFIG };