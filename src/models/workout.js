'use strict';

var mongoose = require('mongoose');

var workoutSchema = new mongoose.Schema({
	name: String,
	completed: Boolean
});

var model = mongoose.model('Workout', workoutSchema);

module.exports = model;
