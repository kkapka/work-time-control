var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
const express = require('express');
const router = express.Router();

// db url
var url = 'mongodb://localhost:27017/work-time-control';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/allUsers', function (req, res) {
  //res.jsonp(db.getAllUsers());
  
  MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  
  var collection = db.collection('user');
  
	collection.find({}).toArray(function(err, users) {
	assert.equal(err, null);
	res.jsonp(users);
	
  });
  
  db.close();
  });
});

module.exports = router;