var Ticker = require('./2-ticker.js');
var ticker = Ticker();

ticker.on('tic', function(t){
    console.log('TICK', t);
});

ticker.start();

// stop the clock 10 seconds after
setTimeout(function(){
    ticker.stop();
},10e4);