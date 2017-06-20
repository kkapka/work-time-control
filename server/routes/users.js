'use strict';

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// db url
var url = 'mongodb://localhost:27017/work-time-control';

var findUsers = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('user');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    // assert.equal(2, docs.length);
    console.log("Found the following records");
    callback(docs);
  });
}

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  findUsers(db, function(docs) {
    console.log(docs);
    exports.getAllUsers = function() {
      return docs;
    }
    db.close();
  });
});