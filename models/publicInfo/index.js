const mongoose = require('mongoose');

let eventDef = require('./event-admin');
let generalInfoDef = require('./generalInfo-admin');
let keyNoteDef = require('./keynote-admin');
let faqDef = require('./faq-admin');
let articleDef = require('./article-admin');
const schemas = {
  'Event': eventDef,
  "Article": articleDef,
  'Faq': faqDef,
  'GeneralInfo': generalInfoDef,
  'KeyNote': keyNoteDef,
};

const config = {
  dateFormat: 'MM-DD-YYYY',
  timeFormat: 'hh:mm:ss'
}

const authz = {
  'module-authz': {'LoginUser': 'R', 'Anyone': ''}
}

module.exports = {schemas, config, authz};