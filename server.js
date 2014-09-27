var express = require('./config/express.js');

express.init(function (app) {
  console.log('['+app.locals.env.name+']', "Running Fresh stack on port: ", app.locals.env.port );
})


