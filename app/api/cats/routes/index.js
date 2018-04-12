'use strict';

module.exports = function(app) {
  const controller = require('../controllers');

  app.route('/cats')
    .get(controller.list)
    // .post(controller.create)
  ;

  /*
  app.route('/cats/:catId')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete)
  ;
  */
};
