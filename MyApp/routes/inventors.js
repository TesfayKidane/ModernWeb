var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var jsonFile = require('./data/inventors.json');
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.setHeader('Content-Type', 'application/json');
  // var json = fs.createReadStream(path.join(__dirname,'data','inventors.json'));
  // res.send(JSON.parse(json));
  res.json(jsonFile);
});

module.exports = router;