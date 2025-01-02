const logger = require('../config/logger');

const errorHandler = (err, req, res, next) => {
  // Log the error
  logger.error({
    message: err.message,
    stack: err.stack,
    method: req.method,
    path: req.path,
    ip: req.ip
  });

  // Don't leak error details in production
  const response = {
    message: process.env.NODE_ENV === 'production' 
      ? 'Internal Server Error' 
      : err.message
  };

  if (process.env.NODE_ENV !== 'production') {
    response.stack = err.stack;
  }

  res.status(err.status || 500).json(response);
};

module.exports = errorHandler;