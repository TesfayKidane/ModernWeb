
const compose = (f,g) => x => f(g(x));
const exclaim = x => `${x}!`;
const uppercase = x => x.toUpperCase() ;

const surprised = compose(exclaim, uppercase);
console.log(surprised("Watch out"));