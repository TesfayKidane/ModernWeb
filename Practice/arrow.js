var evens = [2,4,6,8,10];
var odds = evens.map(v => v + 1);
console.log(odds);
var nums = evens.map((v, i) => v + i);
console.log(nums);

var pairs = evens.map(v => ({even: v, odd: v + 1}));
console.log(pairs);