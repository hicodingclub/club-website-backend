let pipelineDef = require('./pipeline');

const schemas = {
  Pipeline: pipelineDef,
};

const config = {
  dateFormat: "MM-DD-YYYY",
  timeFormat: "hh:mm:ss",
}

const authz = {
  "module-authz": {"LoginUser": '', "Anyone": ""},
  "Pipeline": {"LoginUser": 'CRUD', "Anyone": "CR"},
}

module.exports = {schemas, config, authz};
