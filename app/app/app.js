/* eslint new-cap: 0 */
'use strict';

require('./db');

const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());

const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

module.exports = app;
