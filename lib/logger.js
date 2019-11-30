const appRoot = require('app-root-path');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, json, simple, prettyPrint, printf, colorize } = format;

const options = {
    file: {
        level: process.env.FILE_LOG_LEVEL || 'warn',
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
    },
    console: {
        level: process.env.CONSOLE_LOG_LEVEL || 'debug',
        format: combine(
          colorize(),
          printf(i => `${i.timestamp} [${i.level}] ${i.message}`),
        ),
        handleExceptions: true,
    },
};

const logger = new createLogger({
  format: combine(
    timestamp(),
    json(),
  ),
    transports: [
        new transports.File(options.file),
        new transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

// redirect morgan genearted output to info, too.
// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
    write: function(message, encoding) {
      logger.info(message);
    },
};

module.exports = logger;