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

router.get('/allWorklog', function (req, res) {
  MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  
  var collection = db.collection('worklog');
  
	collection.find({}).toArray(function(err, logs) {
	assert.equal(err, null);
	res.jsonp(logs);
	
  });
  
  db.close();
  });
});

router.get('/allMessages', function (req, res) {
  MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  
  var collection = db.collection('messages');
  
	collection.find({}).toArray(function(err, messages) {
	assert.equal(err, null);
	res.jsonp(messages);
	
  });
  
  db.close();
  });
});

router.get('/allHolidays', function (req, res) {
  MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  
  var collection = db.collection('holiday');
  
	collection.find({}).toArray(function(err, holidays) {
	assert.equal(err, null);
	res.jsonp(holidays);
	
  });
  
  db.close();
  });
});

router.get('/allHolidayOrOvertimeRequests', function (req, res) {
  MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  
  var collection = db.collection('holidayOrOvertimeRequests');
  
	collection.find({}).toArray(function(err, requests) {
	assert.equal(err, null);
	res.jsonp(requests);
	
  });
  
  db.close();
  });
});

/* POST to Add User Service */
router.post('/sendMessage', function(req, res) {
	MongoClient.connect(url, function(err, db) {
		  assert.equal(null, err);
			console.log("Connected correctly to server");
		
		// Get our form values. These rely on the "name" attributes
		var to = req.body.to;
		var text = req.body.text;
		
		console.log("to: "+to);
		console.log("text: "+text);

		// Set our collection
		var collection = db.collection('messages');
		    collection.insert({
        "read" : false,
        "text" : text,
		"to" : to,
		}, function (err, doc) {
			if (err) {
				// If it failed, return error
				console.log("error with adding document");
				res.send("There was a problem with sending information to database");
			}
			else {
				// And forward to success page
				console.log("document was added successfully");
				res.redirect("/login");
			}
		});
		
		db.close();
  });
	
});

module.exports = router;