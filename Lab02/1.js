var Animal = {
    classification : 'Default',
    getClassification: function() {
        return this.classification;
    }
}

function Birds (color, feather, wings, tail){      
        this.classification ="flying"; 
        this.fly = true;
        this.swim = true;
        this.color = color;
        this.feather = feather;
        this.wings = wings;
        this.tail = tail;
}

Birds.prototype = Object.create(Animal);
Birds.prototype.constructor = Birds;
Birds.prototype.getBirdDetails = function(){
    return '[Bird, Fly : "'+this.fly+'" , Swim : '+this.swim+'" Color : '+this.color+'" Feather : '+this.feather+'" Wings : '+this.wings+'" Tail : '+this.tail+'"]';
}
var duck = new Birds("white","short feather", "long wings","short tail");
console.log(duck.constructor);
console.log(Animal.isPrototypeOf(duck));
console.log(duck.getBirdDetails());
console.log(duck.getClassification());