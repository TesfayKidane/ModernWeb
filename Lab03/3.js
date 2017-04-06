// Exercise 1 : create uninitialized buffer with 100 bytes length and fill 
// it with bytes with values starting from 0 to 9 and then print its contents.


var buffer = new Buffer(100);
console.log("Empty buffer");
//console.log(buffer.toJSON());
for(let i = 0 ; i < 100; i++){
    buffer[i] = i;
}
console.log("After buffer is filled");
//console.log(buffer.toJSON());

// Exercise 2 : Slice the previous buffer with bytes ranging 40 to 60 and print it.
var slice = buffer.slice(40,60);
console.log(slice.toJSON());
console.log(buffer.toJSON());
// Exercise 3 : do as 2 but copy them to new buffer
var targetBuffer = new Buffer(20);
var targetStart = 0 ;
    sourceStart = 40;
    sourceEnd = 60;
buffer.copy(targetBuffer,targetStart,sourceStart,sourceEnd);
buffer = null;

console.log(targetBuffer.toJSON());
console.log(buffer === null ? "buffer is null" : buffer.toJSON());
