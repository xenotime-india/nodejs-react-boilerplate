const jwt  = require('jsonwebtoken');
const config = require('config');

var JWTService = (function() {
  return {
    generateToken: function(key) {
      var token = jwt.sign({
        auth:  key,
        exp: Math.floor(new Date().getTime()/1000) + 7*24*60*60
      }, config.JWT_SECRET);
      return token;
    }
  }
})();

module.exports = JWTService;
