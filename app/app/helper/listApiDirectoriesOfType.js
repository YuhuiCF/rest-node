'use strict';

const {log} = require('console');
const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');

const readdir = Promise.promisify(fs.readdir);
const stat = Promise.promisify(fs.stat);


module.exports = listApiDirectoriesOfType;


/**
 * @name listApiDirectoriesOfType
 * @description list all the directories of type 'model' or 'route' of the API
 *    module
 * @param {string} type - supported values are ['model', 'route']
 * @return {Promise} directories would be resolved
 */
function listApiDirectoriesOfType(type) {
  const mapping = {
    model: 'models',
    route: 'routes',
  };

  const subPath = mapping[type];

  if (!subPath) {
    log(`type ${type} for listApiDirectoriesOfType() is not supported`);
    process.exit(1);
  } else {
    const apiDirectory = path.resolve(process.cwd(), './app/api');
    return readdir(apiDirectory)
      .then((files) => {
        // log(files);
        const directories = [];
        const promises = [];
        for (const file of files) {
          const modelDirecotry = path.resolve(apiDirectory, file, subPath);
          promises.push(
            stat(modelDirecotry)
              .then(() => {
                directories.push(modelDirecotry);
              }, () => {
                log(`${modelDirecotry} does not exist`);
              })
          );
        }

        return Promise
          .all(promises)
          .then(() => {
            return directories;
          })
        ;
      }, (err) => {
        log(err);
        process.exit(1);
      })
    ;
  }
}
