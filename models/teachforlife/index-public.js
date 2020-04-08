let tutorDef = require('./tutor-public');

const schemas = {
    Tutor: tutorDef,
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
    'Tutor': { 'LoginUser': '', 'Anyone': 'R' },
}

module.exports = { schemas, config, authz };