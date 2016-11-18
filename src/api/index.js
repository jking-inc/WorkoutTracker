'use strict';

var express = require('express');
var Workout = require('../models/workout');

var router = express.Router();

router.get('/workouts', function(req, res) {
  Workout.find({}, function(err, workouts) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ workouts: workouts });
  });
});

router.post('/workouts', function(req, res) {
  var workout = req.body;
  Workout.create(workout, function(err, workout) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'workout': workout, message: 'Workout Created' });
  });
});

router.put('/workouts/:id', function(req, res) {
  var id = req.params.id;
  var workout = req.body;
  if (workout && workout._id !== id) {
    return res.status(500).json({ err: "Ids don't match!" });
  }
  Workout.findByIdAndUpdate(id, workout, {new: true}, function(err, workout) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'workout': workout, message: 'Workout Updated' });
  });
});

// TODO: Add DELETE route to remove existing entries

module.exports = router;
