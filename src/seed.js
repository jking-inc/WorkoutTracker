'use strict';

var Workout = require('./models/workout');

var workouts = [
	'Bench Press',
	'Incline Bench Press',
	'Decline Bench Press'
];

workouts.forEach(function (workout, index) {
  Workout.find({ 'name': workout }, function(err, workouts) {
  	if (!err && !workouts.length) {
      Workout.create({ completed: false, name: workout });
  	}
  });
});
