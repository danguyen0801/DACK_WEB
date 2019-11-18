var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'QuanLySanPham';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  router.get('/', function (req, res, next) {
    var collection = db.collection('Products');
    collection.find({ }).toArray(function (e, docs) {
      console.log(docs);
      res.render('index', {
        "data": docs
      });
    });
  });
});


/* GET home page. */
/* GET products page */


module.exports = router;
