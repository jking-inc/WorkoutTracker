'use strict';

var angular = require('angular');

angular.module('workoutListApp').controller('mainCtrl', require('./main'));
angular.module('workoutListApp').controller('workoutCtrl', require('./workout'));
angular.module('workoutListApp').controller('weightCtrl', require('./weight'));
