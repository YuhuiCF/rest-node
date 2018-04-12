'use strict';

const {log} = require('console');
const Promise = require('bluebird');

const app = require('./app');
const {initModels} = require('./models');
const {initRoutes} = require('./routes');

const port = process.env.PORT || 3000;

module.exports = () => {
  const promises = [];

  promises.push(
    initModels()
      .catch((err) => {
        log(`initModels failed: ${err}`);
        return Promise.reject();
      })
  );
  promises.push(
    initRoutes(app)
      .catch((err) => {
        log(`initRoutes failed: ${err}`);
        return Promise.reject();
      })
  );

  return Promise
    .all(promises)
    .then(() => {
      app.listen(port, function() {
        log('Express server listening on port ' + port);
      });
    })
  ;
};
