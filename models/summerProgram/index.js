let enrollmentDef = require('./spenrollment-admin');

const schemas = {
    SPEnrollment: enrollmentDef,
};

const config = {
    dateFormat: "MM-DD-YYYY",
    timeFormat: "hh:mm:ss",
    fileServer: {
        uploadUrl: '/api/files/upload',
        downloadUrl: '/api/files/download'
    }
}

const authz = {
    "module-authz": { "LoginUser": 'R', "Anyone": "" },
}

module.exports = { schemas, config, authz };