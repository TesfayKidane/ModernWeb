var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  var json = fs.createReadStream(path.join(__dirname,'data','inventors.json'));
  res.send(json);
});

module.exports = router;