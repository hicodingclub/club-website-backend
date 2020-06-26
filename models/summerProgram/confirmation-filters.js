const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const MDDS_EMAIL_TOKEN = 'this is a normal one used for mdds normal';

function handleConfirmationRequest(req, res, next) {
  console.log("====== request:", req.body);
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        return next(createError(400, 'Bad document.'));
      }
    }
    if (!body.mddsEmailToken) {
        return next(createError(400, 'Bad document. Token is missing.'));
    }

    let email;
    try {
        const decoded = jwt.verify(body.mddsEmailToken, MDDS_EMAIL_TOKEN);
        console.log('==decoded', decoded);
        email = decoded.email;
        if (email != body.email) {
          return next(createError(400, 'Bad request. Invalid email.'));
        }
    } catch (err) {
        return next(createError(400, 'Bad request. Invalid token.'));
    }

    req.body.email = email;
    console.log("====== request:", req.body);

    return next();
}
const filters = {
    'create': [handleConfirmationRequest],
    'update': undefined,
}

module.exports = filters;