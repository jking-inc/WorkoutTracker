webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('workoutListApp', []);

	__webpack_require__(3);
	__webpack_require__(5);
	__webpack_require__(7);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('workoutListApp').service('dataService', __webpack_require__(4));

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	function DataService($http, $q) {

	  this.getWorkouts = function (cb) {
	    $http.get('/api/workouts').then(cb);
	  };

	  this.deleteWorkout = function (workout) {
	    console.log("I deleted the " + workout.name + " workout!");
	  };

	  this.saveWorkouts = function (workouts) {
	    var queue = [];
	    workouts.forEach(function (workout) {
	      var request;
	      if (!workout._id) {
	        request = $http.post('/api/workouts', workout);
	      } else {
	        request = $http.put('/api/workouts/' + workout._id, workout).then(function (result) {
	          workout = result.data.workout;
	          return workout;
	        });
	      }
	      queue.push(request);
	    });
	    return $q.all(queue).then(function (results) {
	      console.log("I saved " + workouts.length + " workouts!");
	    });
	  };
	}

	module.exports = DataService;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('workoutListApp').directive('workout', __webpack_require__(6));

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	function WorkoutDirective() {
	  return {
	    templateUrl: 'templates/workout.html',
	    replace: true,
	    controller: 'workoutCtrl'
	  };
	}

	module.exports = WorkoutDirective;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('workoutListApp').controller('mainCtrl', __webpack_require__(8));
	angular.module('workoutListApp').controller('workoutCtrl', __webpack_require__(9));

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	function MainCtrl($scope, dataService) {

	  dataService.getWorkouts(function (response) {
	    var workouts = response.data.workouts;
	    $scope.workouts = workouts;
	  });

	  $scope.addWorkout = function () {
	    $scope.workouts.unshift({ name: "This is a new workout.",
	      completed: false });
	  };
	}

	module.exports = MainCtrl;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	function WorkoutCtrl($scope, dataService) {

	  $scope.deleteWorkout = function (workout, index) {
	    $scope.workouts.splice(index, 1);
	    dataService.deleteWorkout(workout);
	  };

	  $scope.saveWorkouts = function () {
	    var filteredWorkouts = $scope.workouts.filter(function (workout) {
	      if (workout.edited) {
	        return workout;
	      };
	    });
	    dataService.saveWorkouts(filteredWorkouts).finally($scope.resetWorkoutState());
	  };

	  $scope.resetWorkoutState = function () {
	    $scope.workouts.forEach(function (workout) {
	      workout.edited = false;
	    });
	  };
	}

	module.exports = WorkoutCtrl;

/***/ }
]);