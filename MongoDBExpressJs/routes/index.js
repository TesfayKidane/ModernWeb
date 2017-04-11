var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var crypto = require('crypto');

router.get('/', function(req, res, next) {
  MongoClient.connect('mongodb://127.0.0.1:27017/lab07', function(err, db){
      if(err) throw err;
      db.collection('lab07coll').findOne({},function(err, doc){
          if(err) throw err;
          db.close();               
          var decrypted = decrypt(doc.message);    
          res.render('index', { title: 'Express, NodeJs, MongoDB, Crypto Excercise', decipher : decrypted });          
      });
  });  
});
function decrypt(text){
  var decipher = crypto.createDecipher('aes256','asaadsaad');
  var dec = decipher.update(text,'hex','utf8');
  dec += decipher.final('utf8');
  return dec;
}

module.exports = router;
