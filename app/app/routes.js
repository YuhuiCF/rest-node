'use strict';

const {listApiDirectoriesOfType} = require('./helper');


module.exports = {
  initRoutes,
};


/**
 * @name initRoutes
 * @description initialize all the API routes
 * @param {object} app - express app
 * @return {Promise}
 */
function initRoutes(app) {
  return listApiDirectoriesOfType('route')
    .then((routeDirectories) => {
      for (const directory of routeDirectories) {
        require(directory)(app);
      }
    })
  ;
}
