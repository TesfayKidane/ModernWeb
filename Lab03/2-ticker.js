var util = require('util');
var EventEmitter = require('events').EventEmitter;

module.exports = Ticker;

function Ticker(){
    if(!(this instanceof Ticker)) return new Ticker();

    this.__started = false;
    EventEmitter.call(this);
}

util.inherits(Ticker, EventEmitter);

Ticker.prototype.start = function start(){
    var self = this;

    if(self.___started) return;

    this.___started = Date.now();

    self.__interval = setInterval(function(){
        self.emit('tic', self.time());
    },1000);
};

Ticker.prototype.stop = function stop() {
    clearInterval(this.__interval);
    this.___started = false;
};

Ticker.prototype.time = function time() {
    return this.___started && Date.now() - this.___started;
};