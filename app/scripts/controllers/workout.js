'use strict';

function WorkoutCtrl ($scope, dataService) {

  $scope.deleteWorkout = function(workout, index) {
    $scope.workouts.splice(index, 1);
    dataService.deleteWorkout(workout);
  };

  $scope.saveWorkouts = function() {
    var filteredWorkouts = $scope.workouts.filter(function(workout){
      if(workout.edited) {
        return workout
      };
    })
    dataService.saveWorkouts(filteredWorkouts)
      .finally($scope.resetWorkoutState());
  };

  $scope.resetWorkoutState = function() {
      $scope.workouts.forEach(function(workout) {
         workout.edited = false;
      });
  }
}

module.exports = WorkoutCtrl;
