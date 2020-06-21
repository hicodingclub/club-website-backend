const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const appRootPath = require('app-root-path');

const logger = require('./lib/logger');
// connect db
require('./db');

const meanRestExpress = require('@hicoder/express-core');

// setup emailing
const { GetEmailingManageRouter, MddsEmailer } = require('@hicoder/express-emailing');
const awsConfFile = path.join(appRootPath.toString(), process.env.AWS_CONFIG_FILE_NAME || '.aws.conf.json');
const emailer = new MddsEmailer(awsConfFile);
setTimeout( () => {emailer.startDaemon()}, 20000 );

const emailInfoForAuth = {
    serverUrl: process.env.ADMIN_SERVER_URL || 'http://localhost:3001',
    serverUrlPasswordReset: process.env.ADMIN_PASSWD_RESET_URL || 'http://localhost:3001/auth/reset/',
    serverUrlRegVerification: process.env.REGISTRATION_VERIFICATION_URL || 'http://localhost:3001/auth/regverification/',
}

//for auth client
let option = {
    authz: 'role', // admin role based authorization
};
const authApp = require('@hicoder/express-auth-app');
const authFuncs = authApp.getAuthFuncs(option);
//for auth server
const authServer = require('@hicoder/express-auth-server');
const authAccountDef = authServer.authAccountDef;
option = {
    authz: 'role', // admin role based authorization
    registerEmailVerification: false,
};
const authRouter = authServer.GetDefaultAuthnRouter(authAccountDef, option);
authRouter.setEmailer(emailer, emailInfoForAuth); // set the emailer instance for sending emails

const authzAccessRouter = authServer.GetDefaultAccessManageRouter('Access', authFuncs); // manage public access module
const authzRolesRouter = authServer.GetDefaultRolesManageRouter('Roles', authFuncs); // manage admin roles module
authzRolesRouter.setEmailer(emailer, {});

const defaultUserDef = authServer.authUserDef;
const usersRouter = meanRestExpress.RestRouter(defaultUserDef, 'Users', authFuncs);
usersRouter.setEmailer(emailer, {});

// for Email Template models
const emailingRouter = GetEmailingManageRouter("Emailing", authFuncs);

// for academics models
// const academicsDbDefinition = require('./models/academics/index');
// const academicsRouter = meanRestExpress.RestRouter(academicsDbDefinition, 'Academics', authFuncs);
// academicsRouter.setEmailer(emailer, {}); // set the emailer instance for sending emails

// for public models
const publicInfoDbDefinition = require('./models/publicInfo/index');
const publicInfoRouter = meanRestExpress.RestRouter(publicInfoDbDefinition, 'PublicInfo', authFuncs);

// for teachforlife models
const teachForLifeDBDefinition = require('./models/teachforlife/index');
const teachForLifeRouter = meanRestExpress.RestRouter(teachForLifeDBDefinition, 'Teachforlife', authFuncs);
teachForLifeRouter.setEmailer(emailer, {});

// for summerProgram models
const summerProgramDBDefinition = require('./models/summerProgram/index');
const summerProgramRouter = meanRestExpress.RestRouter(summerProgramDBDefinition, 'SummerProgram', authFuncs);
summerProgramRouter.setEmailer(emailer, {});

// file server
const fileSvr = require('@hicoder/express-file-server');
const defaultAdminSysDef = fileSvr.sampleAdminSysDef;
const fileSOption = {
    storage: 'fs',
    directory: path.join(__dirname, 'storage', 'uploads'),
    linkRoot: '/api/files', // link = linkRoot + '/download' - download needs to be enabled.
}
const dbSOption = {
    storage: 'db',
    linkRoot: '/api/files', // link = linkRoot + '/download' - download needs to be enabled.
}
const fileSvrRouter = fileSvr.ExpressRouter(defaultAdminSysDef, 'Files', authFuncs, fileSOption);

// Authorization App Client. Call it after all meanRestExpress resources are generated.
const manageModule = ['Users', 'Access', 'Roles', 'Files', 'EmailTemplates', 'PublicInfo', 'Teachforlife', 'SummerProgram']; // the modules that manages
// pass in authzRolesRouter so authApp can upload the managed role moduoes to authzRolesRouter
authApp.run('local', 'app-key', 'app-secrete', authzRolesRouter, { 'roleModules': manageModule });

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public-admin')));

// app.use('/api/academics', academicsRouter);
app.use('/api/teachforlife', teachForLifeRouter);
app.use('/api/summerprogram', summerProgramRouter);
app.use('/api/publicinfo', publicInfoRouter);
app.use('/api/files', fileSvrRouter);
app.use('/api/users', usersRouter);
app.use('/api/roles', authzRolesRouter);
app.use('/api/access', authzAccessRouter);
app.use('/api/emailing', emailingRouter);

app.use('/api/auth', authRouter);

// fall back to index.html
app.get(/.*/, function(req, res, next) {
    if (req.accepts('html')) {
        return res.sendFile(path.join(__dirname, './public-admin/index.html'));
    } else {
        return next();
    }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    const allowedErrCode = [400, 401, 403, 404];
    if (!allowedErrCode.includes(err.status)) {
        logger.error(err)
    }

    // render the error page
    res.status(err.status || 500);

    res.render('error');
});

module.exports = app;