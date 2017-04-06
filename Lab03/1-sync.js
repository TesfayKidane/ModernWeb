var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
    var image = fs.readFileSync(__dirname+'/22mb.jpg');
    res.end(image);
}).listen(9000,'127.0.0.1');