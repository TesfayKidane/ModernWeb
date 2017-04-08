var http = require('http');
var url = require('url');

http.createServer(function (request, response){
    var queryData = url.parse(request.url,true).query;
    console.log("File path : "+queryData.url);

}).listen(3000,'127.0.0.1', () => console.log("listiening on port 3000"));