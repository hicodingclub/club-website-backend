let tutorDef = require('./tutor-public');
let enrollmentDef = require('./enrollment-public');


const schemas = {
    Tutor: tutorDef,
    Enrollment: enrollmentDef,
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
    'Enrollemnt': { 'LoginUser': '', 'Anyone': 'C' }
}

module.exports = { schemas, config, authz };