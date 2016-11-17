'use strict';

function DataService ($http, $q) {

  this.getWorkouts = function(cb) {
    $http.get('/api/workouts').then(cb);
  };

  this.deleteWorkout = function(workout) {
    console.log("I deleted the " + workout.name + " workout!");
  };

  this.saveWorkouts = function(workouts) {
    var queue = [];
    workouts.forEach(function(workout) {
        var request;
        if(!workout._id) {
          request = $http.post('/api/workouts', workout);
        } else {
          request = $http.put('/api/workouts/' + workout._id, workout).then(function(result) {
            workout = result.data.workout;
            return workout;
          });
        }
        queue.push(request);
    });
    return $q.all(queue).then(function(results) {
      console.log("I saved " + workouts.length + " workouts!");
    });
  };

}

module.exports = DataService;
