'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CatSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the cat',
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed'],
    }],
    default: ['pending'],
  },
});

module.exports = mongoose.model('Cat', CatSchema);
