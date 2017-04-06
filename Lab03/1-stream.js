var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function(req,res){
    var rs = fs.createReadStream(path.join(__dirname,'/22mb.jpg')).pipe(res);
}).listen(9000, '127.0.0.1');