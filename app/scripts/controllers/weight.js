'use strict';

function WeightCtrl ($scope){
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

}

module.exports = WeightCtrl;
