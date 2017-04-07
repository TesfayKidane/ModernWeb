// Creating custom transform stream 
var stream = require('stream');
var util = require('util');
var fs = require('fs');
var path = require('path');

var Transform = stream.Transform;

function ReplaceAt(position, replacer){
    //if position is less than 0 return null
    if(position < 0)
        return;
    // allow use without new
    if(!(this instanceof ReplaceAt)){
        return new ReplaceAt(position, replacer);
    }

    // Init Transform
    Transform.call(this);
    this.position = position;
    this.replacer = replacer;
    this.chunks = [];
    this.len = 0;
    this.replaced = false;
    this.chunksAdded = 0;
    
}

util.inherits(ReplaceAt, Transform);

ReplaceAt.prototype._transform = function(chunk, enc, cb) {
    
    console.log(new Buffer(chunk,enc).toString());
    var t = chunk.length;
    if(this.position - t <= this.len && !this.replaced)
    {
        let p = this.position - 1; 
        if(this.chunksAdded > 0)
        {
            p = this.len - this.position - 1;
        }

        var data = new Buffer(chunk, enc);
        var temp = [];
        temp.push(data.slice(0,p));
        temp.push(new Buffer(this.replacer));
        temp.push(data.slice(p+1,data.length));
        this.replaced = true;
        this.chunks.push(Buffer.concat(temp,data.length));
    }
    else{
        this.chunks.push(chunk);
    }
    this.chunksAdded += 1;
    this.len += chunk.length;
    cb();
};

ReplaceAt.prototype._flush = function(cb){
    this.push(Buffer.concat(this.chunks, this.len));
    cb();
}

module.exports = ReplaceAt;
