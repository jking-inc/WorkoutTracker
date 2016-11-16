var weight = 0;
var workout = "";
var workoutSelection = "";

// Increasing and Decreasing weight using the + and - buttons
angular.module('myApp', [])
  .controller('weightCtrl', ['$scope', function($scope) {
    $scope.weight = 0;
    $scope.weightIncrease = function() {
      $scope.weight = parseInt($scope.weight) + 5;
    };
    $scope.weightDecrease = function() {
        if($scope.weight <= 0){
        $scope.weight = 0;
    } else {
        $scope.weight -= 5;
    }
    };
  }]);

  /*
Change Color of workout button
  myApp.controller('classCtrl', function ($scope) {
    $scope.isActive = false;
  $scope.activeButton = function() {
    $scope.isActive = !$scope.isActive;
  }
});
*/

// Show workout based off the button selection
var selectWeight = $('.buttonContent > p').click(function() {
    workoutSelection = $(this).text();
    if ( workoutSelection == "Bench Press" || workoutSelection == "Incline Bench Press" || workoutSelection == "Decline Bench Press" || workoutSelection == "Dead Lifts" || workoutSelection == "Squats"){
        weight = 45;
    } else if ( workoutSelection == "Barbell Curls" || workoutSelection == "Tricep Cable Pushdowns" || workoutSelection == "EZ-Bar Curls" ){
            weight = 15;
        } else if ( workoutSelection == "Situps" || workoutSelection == "Crunches" || workoutSelection == "Hyperextensions" ) {
                    weight = 0;
                } $('#weight').val(weight);
});

// Button rep functionality
var repCount = $('#reps > button').click(function() {
    $(this).addClass("active");
});
