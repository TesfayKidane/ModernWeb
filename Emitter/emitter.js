var Emitter = require('events');
var util = require('util');

function Welcome(){
    Emitter.call(this);
    this.message = "welcome";
}

util.inherits(Welcome, Emitter);

var student = new Welcome();
student.on("newstu", function(){
    console.log("welcome");
});

Welcome.prototype.visit = function(){
    this.emitt("newstu");
}

student.visit();