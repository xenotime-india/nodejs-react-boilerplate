/**
 * Created by sandeepkumar on 18/04/17.
 */
/**
 * Main application routes
 */

'use strict';

const errors = require('./../components/errors');
const express = require('express');
const auth = require('./auth');
const metadata = require('./metadata');

const router = express.Router();

// All undefined asset or api routes should return a 404
router.route('/:url(api|auth|components|app|bower_components|assets)/*')
  .get(errors[404]);

module.exports = function (app) {
  app.use('/api/auth', auth);
  app.use('/api/metadata', metadata);
  app.use('/api', router);
};
