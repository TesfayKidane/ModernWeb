var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var name = req.query.name;
  console.log(name);
  res.render('feedback', { name: name });
});

module.exports = router;