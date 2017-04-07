// Creating custom transform stream 
var stream = require('stream');
var util = require('util');
var fs = require('fs');
var path = require('path');

var Transform = stream.Transform;

function ReplaceCharAt(position, replacer){
    //if position is less than 0 return null
    if(position < 0)
        throw new Error("Position can not be less than 0.");
    if(replacer.length > 1 )
        throw new Error("Replacer should be one character");
    // allow use without new
    if(!(this instanceof ReplaceCharAt)){
        return new ReplaceCharAt(position, replacer);
    }

    // Init Transform
    Transform.call(this);
    this.position = position;
    this.replacer = replacer;
    this.chunks = [];
    this.totalLength = 0;
    this.replaced = false;
    this.chunksAdded = 0;
    
}

util.inherits(ReplaceCharAt, Transform);

ReplaceCharAt.prototype._transform = function(chunk, enc, cb) {    
    if(this.position <= this.totalLength+chunk.length && !this.replaced)
    {
        let p = this.position - 1; 
        if(this.chunksAdded > 0)
        {
            p = this.totalLength - this.position - 1;
        }        
        // convert chunk to buffer for easier manipulation
        let data = new Buffer(chunk, enc);
        let temp = [];
        // replace starting from ''position' with replacer
        temp.push(data.slice(0,p));
        temp.push(new Buffer(this.replacer));
        temp.push(data.slice(p+1,data.length));      

        this.chunks.push(Buffer.concat(temp,data.length));
        this.replaced = true;
    }
    else{
        this.chunks.push(chunk);
    }
    this.chunksAdded += 1;
    this.totalLength += chunk.length;
    cb();
};

ReplaceCharAt.prototype._flush = function(cb){
    this.push(Buffer.concat(this.chunks, this.len));
    cb();
}

module.exports = ReplaceCharAt;
