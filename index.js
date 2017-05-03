/* eslint consistent-return:0 */
require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('./server/logger');
const config = require('config');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./server/middlewares/frontendMiddleware');
const isDev = config.NODE_ENV !== 'production';
const ngrok = (isDev && config.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();

app.use(cookieParser());

require('./server/routes/index')(app);

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || config.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = config.PORT;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
