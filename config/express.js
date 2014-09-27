'use strict';

var express     = require('express'),
    paths       = require('./paths.js'),
    freshUtils  = require('./fresh-utils.js'),
    app         = express()
;

exports.init = function (callback) {

  app.locals.env = freshUtils.loadEnviromentalVariables();

  // Serve static files from
  app.use(express.static(paths.public));

  // Start the server
  app.listen(app.locals.env.port);

  // Call the callback
  callback(app);
}
