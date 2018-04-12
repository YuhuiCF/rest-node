/* eslint new-cap: 0 */
'use strict';

const express = require('express');
const app = express();

const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

module.exports = app;
