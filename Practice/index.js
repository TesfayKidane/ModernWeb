
'use strict'
console.log('test')
// <= ES5
function newGame(){
    this.live = 0 ;
    var that = this;
    this.addLives = function(){

        this.oneup = setTimeout(function(){
            console.log(++that.live);
        }, 1000);
    }

}

const mario = new newGame();
mario.addLives();

// ES6
function startGame(){
    this.live = 0;
    this.addlives = () =>
     {
        this.oneup = setTimeout(()=>{
            console.log(++this.live);
        },1000);

    }

}

const game = new startGame();
game.addlives();

console.log("//Inheritance");
var a = {} ;
console.log("a.__proto__ : "+a.__proto__);

var b = function(){};
console.log("b.__proto__ : "+b.__proto__);
console.log("b.__proto__.__proto__ : "+b.__proto__.__proto__);

var c = [];
console.log("c.__proto__ : "+c.__proto__);
console.log("c.__proto__.__proto__ : "+c.__proto__.__proto__);

console.log("//Creating Objects");
var Animal = {
    classification : 'Default',
    getClassification: function() {
        return this.classification;
    }
}

//var bird = Object.create(Animal);
//console.log("classification : "+bird['classification']);
//console.log("bird.hasOwnProperty('classification') : " + bird.hasOwnProperty('classification'));

//bird.classification = 'Flying';
//console.log("bird.hasOwnProperty('classification') : " + bird.hasOwnProperty('classification'));
//console.log("bird : "+bird);
//console.log(bird.getClassification());


console.log("//Function Constructors");

function Birds (color, feather, wings, tail){       
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
duck.constructor;
console.log(Animal.isPrototypeOf(duck));
console.log(duck.getBirdDetails());

console.log("//Object Properties");

var student = {
    name : "Tesfay Aregay",
    course : "MWP",
    id : 4880
}

for(var key in student){
    console.log(key);
}

console.log(Object.keys(student));

var stu = Object.create(student);
for(var key in stu){
    console.log(key);
}
Object.keys(stu);
delete stu.no;
console.log(stu);
