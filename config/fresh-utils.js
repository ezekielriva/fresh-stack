'use strict';

exports.loadEnviromentalVariables = function () {
  var variables;
  switch(process.env.NODE_ENV) {
    case "development":
      variables = require(__dirname + "/enviroments/development.js");
      break;
    case "test":
      variables = require(__dirname + "/enviroments/test.js");
      break;
    case "production":
      variables = require(__dirname + "/enviroments/production.js");
      break;
    default:
      console.error('[ERROR]', 'Please ensure you are setted NODE_ENV variable with anyone of these [development, test, production]');
  }

  variables.name = process.env.NODE_ENV;

  return variables;
}
