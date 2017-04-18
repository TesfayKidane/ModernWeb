var sum = (x, y) => x + y;

const calc = (fn, x, y) => fn(x,y);

console.log(calc(sum,5,4)); 