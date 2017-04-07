//Exercise 1 : print the size of files in bytes.

var fs = require("fs");
var path = require("path");

function getFileSizeInBytes(filename){
    return fs.statSync(filename).size;
}
console.log(getFileSizeInBytes("CS572.txt"));

// Exercise 2 : 

var readable = fs.createReadStream(path.join(__dirname+'/CS572.txt'),
{ encoding: 'utf8', highWaterMark: 100});

readable.on('data', function(chunk){
    console.log(chunk.length);
    for(let i = 10 ; i <= 14; i++)
    {
        console.log(chunk[i]);
    }
})

// Exercise 3: Overwrite the file with the UTF-8  -encoding string
var str = "ABCDEFGHIGKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
var writable = fs.createWriteStream(path.join(__dirname+'/CS5722.txt'),{defaultEncoding: 'utf8', autoClose: true});
writable.write(str);
writable.close();

// Exercise 4: Append utf8 'abc' to file.
// Asynchronously
var filename = path.join(__dirname+'/CS5722.txt');
var appendtext= "APPENDED";
function appendFileAsync(f,a){
    fs.appendFile(f,a, function(err){
        if(err) throw err;
    });
}
appendFileAsync(filename,appendtext);
//Synchronously
function appendFileSync(f,a){
    fs.appendFileSync(f,a);
}
appendFileSync(filename,appendtext);

