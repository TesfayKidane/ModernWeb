// Exercise 5 - change byte at pos 10 to the UTF-8 value of "7".
var fs = require("fs");
var path = require("path");

var ReplaceAt = require('./stream-replaceCharAt');

var r = ReplaceAt(8,'-');
fs.createReadStream(path.join(__dirname+'/CS5722.txt'),{encoding:'utf8', highWaterMark: 10}).pipe(r).pipe(process.stdout)
fs.createReadStream(path.join(__dirname+'/CS5722.txt'),{encoding:'utf8', highWaterMark: 10}).pipe(ReplaceAt(8,'~')).pipe(process.stdout)