// uncurried
function add1(x, y) {
   return x + y;
}

// curried
function add(x) {
   return function(y) {
      return x + y;
   }
}

const addThree = add(3);

console.log(addThree(4));
console.log(addThree(6));
console.log(addThree(25));
console.log(addThree(56));

// curried with ES6 arrow function syntax
const addArrow = x => y => x + y;

const addFour = addArrow(4);

console.log(addFour(4));
console.log(addFour(6));
console.log(addFour(25));
console.log(addFour(56));

// arity => number of args a fn receives