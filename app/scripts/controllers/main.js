'use strict';

function MainCtrl ($scope, dataService) {

  dataService.getWorkouts(function(response){
    var workouts = response.data.workouts;
    $scope.workouts = workouts;
  });

  $scope.addWorkout = function() {
    $scope.workouts.unshift({name: "This is a new workout.",
                      completed: false});
  };

}

module.exports = MainCtrl;
