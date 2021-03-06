const jwt = require('jsonwebtoken');

/*
This is the middleware function to protect all the 
routes
*/
function verifyToken(req, res, next) {
var token = req.headers['authorization'];
  if (!token)
  return res.status(403).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, process.env.secretKey, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    // if everything good, save to request for use in other routes
    next();
  });
}
module.exports = verifyToken;