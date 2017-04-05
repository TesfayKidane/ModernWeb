Array.prototype.even = function(){
    let even = new Array();
    for(const e of this){
        if(!isNaN(e) && (e % 2 === 0))
            even.push(e);
    }
    return even;
}

Array.prototype.odd = function(){
    let odd = new Array();
    for(const e of this){
        if(!isNaN(e) && (e % 2 !== 0))
            odd.push(e);
    }
    return odd;
}

Array.prototype.first = function () {
    return this[0];
};
Array.prototype.sum = function() {
 
    let total = 0 ;
    for(const e of this)
    {
        if(isNaN(e))
            return null;
        total += e;
    }
    return total;
};

console.log([1,2,3,4,5,6,7,8,9,10].even());
console.log([1,2,3,4,5,6,7,8,9,10].odd());
console.log([1,2,3,4,5,6,7,8,9,10].first());
console.log([1,2,3,4,5,6,7,8,9,10].sum());