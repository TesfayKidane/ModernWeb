var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contactus', { title: 'Contact Us' });
});

router.post('/submit', function(req,res){
    res.redirect('/feedback');
});
module.exports = router;
