const express = require('express');

const SalesforceService = require('./../services/SalesforceService');
const router = express.Router();

router.get('/', function(req, res) {
  res.redirect(SalesforceService.getAuthorizationUrl());
});

router.get('/callback', function(req, res) {
  var code = req.query.code;
  SalesforceService.processOAuthCode(code)
    .spread(function(token) {
      return res.redirect('/?auth_token='+token);
    })
    .catch(function() {
      res.redirect('error.html');
    })
});

module.exports = router;
