var Promise = require('promise');
var fs = require('fs');
var path = require('path');
var url = require('url');
var http = require('http');
function retrieveFile(filepath){
    return new Promise((resolve, reject) =>
    {
        if(filepath)
        {
            var file = fs.readFile(path.join(__dirname,filepath),'utf8',
            function(err, data){
                if(err)
                    reject(Error('Problem reading the file'));
                else
                    console.log(data);
            });
            // var readable = fs.createReadStream(path.join(__dirname,filepath),
            // {encoding:'utf8',highWaterMark:100});
            // readable.on('data', function(chunk){
            //     console.log('Chunk read : '+ chunk.length);
            // });
            resolve(file);
        }
        else{
            reject(Error('Cannot find the file path'));
        }
    });
}

http.createServer(function(request, response){
    var queryData = url.parse(request.url,true).query;
    retrieveFile(queryData.url).then(()=>console.log('File retrived'))
                               .catch(err => {console.log(err);});
    console.log("File path : "+queryData.url);
}).listen(9000,()=>console.log('listening on port 9000'));