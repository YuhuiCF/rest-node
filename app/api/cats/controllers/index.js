'use strict';

const list = require('./list');
const {Cat} = require('../models');

module.exports = {
  list: list(Cat),
};
