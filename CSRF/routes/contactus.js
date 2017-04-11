var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contactus', { title: 'Contact Us', errors : '', csrfTokenFromServer:req.csrfToken()});
});

router.post('/submit', function(req,res){
    //JSON.stringify(req.body);
    req.assert('name','Name is required').notEmpty();
    req.assert('message','Message is required').notEmpty();
    var errors = req.validationErrors();

    if(errors) 
      res.render('contactus',{title:'Contact Us',errors:errors,csrfTokenFromServer:req.csrfToken()});
    else
    {
      //write to json file
      fs.writeFile (path.join(__dirname + '/../public/files/feedback.json'), JSON.stringify(req.body), function(err) {
            if (err) throw err;
          }
      );
      var name = encodeURIComponent(req.body['name']);
      res.redirect('/feedback?name='+name);
    }
});
module.exports = router;
