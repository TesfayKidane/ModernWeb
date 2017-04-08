const Rx = require('rx');
const http = require('http');
const url = require('url');
const qs = require('querystring');
const fs=require('fs');

function onRequest(req, res){
	if(req.url === '/favicon.ico'){
		res.end(); //chrome is sending request 2 times
		return false;	
	}

	const urlStr = req.url;
	const query = url.parse(urlStr).query;
	const filename = qs.parse(query)['url'];

	var observer = Rx.Observable.create(function(observer){
	    
	   	if(fs.existsSync(filename)){
			observer.onNext(filename);
		}else{
			observer.onError('404 file not found');
		} 
		
	});

	observer.subscribe(
	    function(x) { console.log('File Retirieven successfully'); fs.createReadStream(x).pipe(res);},
	    function(x) { console.log(x); res.end(x);},
	    function() { console.log('completed');  }
	);
	
}

http.createServer(onRequest).listen(4000);
console.log("Server has started on port 4000");