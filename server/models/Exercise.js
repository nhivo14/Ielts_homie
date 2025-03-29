const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  module: {
    type: String,
    enum: ['listening', 'reading', 'writing', 'speaking'],
    required: true
  },
  content: {
    type: Object,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: true
  },
  duration: {
    type: Number,  // in minutes
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Exercise', exerciseSchema); 