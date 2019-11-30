const logger = require('./lib/logger');

const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/mdds';

mongoose.Promise = global.Promise;

function connectMongoDb() {
  mongoose.connect(mongoDB, { useNewUrlParser: true }, function(err, connection) {
    if (err) {
      logger.warn(`DB connecting error: ${err.message}. Reconnecting in 10 seconds...`);
      setTimeout(() => {connectMongoDb();}, 10000)
      return;
    }
    logger.info('DB connecting success.');
  } );
}

const connection = mongoose.connection;
if (!connection.readyState) {
  connectMongoDb();
}

connection.on('error', (err) => {
  logger.warn(`DB connection error happens: ${err.message}`);
  connectMongoDb();
});

module.exports = connection;
