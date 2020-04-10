let tutorDef = require('./tutor-admin');
let enrollmentDef = require('./enrollment-admin');

const schemas = {
    Tutor: tutorDef,
    Enrollment: enrollmentDef,
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