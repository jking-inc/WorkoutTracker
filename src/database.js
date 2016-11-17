//lets require/import the mongodb native drivers.
//var mongodb = require('mongoose');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var mongoose = require('mongoose');

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/workoutData';

// Use connect method to connect to the Server
mongoose.connect(url, function (err) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);
  }
});
