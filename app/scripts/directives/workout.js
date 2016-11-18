'use strict';

function WorkOutDirective () {
  return {
    templateUrl: 'templates/workout.html',
    replace: true,
    controller: 'workoutCtrl'
  }
}

module.exports = WorkOutDirective;
