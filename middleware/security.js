const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

module.exports = {
  securityMiddleware: [
    helmet(),
    limiter,
    // Add CORS configuration
    (req, res, next) => {
      res.header('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGINS);
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      next();
    }
  ]
};