'use strict';

/*
TODO: we might not need to initialize the models, as the controllers might
already have initialized them
*/

const {listApiDirectoriesOfType} = require('./helper');


module.exports = {
  initModels,
};


/**
 * @name initModels
 * @description initialize all the mongoose models
 * @return {Promise}
 */
function initModels() {
  return listApiDirectoriesOfType('model')
    .then((modelDirectories) => {
      for (const directory of modelDirectories) {
        require(directory);
      }
    })
  ;
}
