/**
 * Created by sandeepkumar on 18/04/17.
 */
const express = require('express');

const SalesforceService = require('./../services/SalesforceService');
const router = express.Router();

// SF routes
router.get('/objectTypes', function(req, res) {

  SalesforceService.getObjectTypes()
    .then(function(objectTypes) {
      res.send(objectTypes.sobjects);
    })
    .catch(function(err) {
      return console.error(err);
    });

});

router.get('/describe/:objectName', function(req, res) {

  var objectName = req.params.objectName;
  SalesforceService.describeObject(objectName)
    .then(function(objMetadata) {
      res.send(objMetadata);
    })
    .catch(function(err) {
      return console.error(err);
    });

});

router.get('/objects/recent', function(req, res) {
  var objectName = req.query.objectName;
  SalesforceService.getRecentObjects(objectName)
    .then(function(recentObjects) {
      res.send(recentObjects);
    })
    .catch(function(err) {
      return console.error(err);
    });
});

router.get('/chatter/communities', function(req,res) {
  SalesforceService.getChatterCommunities()
    .then(function(communities) {
      res.send(communities);
    })
    .catch(function(err) {
      return console.error(err);
    })
});

module.exports = router;
