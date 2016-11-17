'use strict';

function WorkoutDirective () {
  return {
    templateUrl: 'templates/workout.html',
    replace: true,
    controller: 'workoutCtrl'
  }
}

module.exports = WorkoutDirective;
