var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('feedback', { name: 'name' });
});

module.exports = router;