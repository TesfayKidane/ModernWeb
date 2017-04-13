var counter = ( function() { 
	let privateCounter = 0;
    let name = "";
	function privateMethod(val){
		privateCounter += val;
	}
    function setName(n){
        name = n;
    }
	return {
		increment : function() { privateMethod(1);},
		decrement : function() { privateMethod(-1);},
        getvalue : function() {return privateCounter;},
        setname : function(name) {setName(name);},
        getname : function(){return name}		
	}
})();
counter.increment();

console.log(counter.getvalue());

counter.decrement();

console.log(counter.getvalue());

counter.setname("Tesfay");
console.log(counter.getname());