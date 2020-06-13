let enrollmentDef = require('./spenrollment-public');


const schemas = {
    SPEnrollment: enrollmentDef,
};

const config = {
    dateFormat: 'MM-DD-YYYY',
    timeFormat: 'hh:mm:ss',
    fileServer: {
        uploadUrl: '/api/files/upload',
        downloadUrl: '/api/files/download'
    }
}

const authz = {
    'module-authz': { 'LoginUser': 'R', 'Anyone': '' },
    'SPEnrollment': { 'LoginUser': '', 'Anyone': 'C' }
}

module.exports = { schemas, config, authz };