// Pure functions

// f(x) = x + 1
const f = x => x + 1;

// Ex 1 - Global State

const COST_OF_ITEM = 19;

const cartTotal = quantity => COST_OF_ITEM * quantity;

// console.log(cartTotal(2));

// Ex 2 - same input, different output
const generateID = () => 
   Math.floor(Math.random() * 1000);

const createUser = (name, age) => ({
   id: generateID(),
   name,
   age
});

// impure generateID function causes createUser factory to
// output differing variations of the same thing

// console.log(createUser('Jeff', 43));
// console.log(createUser('Jeff', 43));
// console.log(createUser('Jeff', 43));

// solution -- move the call to generateID() outside of factory

// Ex. 3 - Side effects #1

let id = 0;

const createFoodItem = name => ({
   id: ++id,
   name
});

// console.log(createFoodItem('Cheeseburger'));
// console.log(createFoodItem('Fries'));
// console.log(createFoodItem('Milkshakes'));
// console.log(id); // not what we want! mutating a global variable

// Ex. 4 - Side effect of the outside world
// surprise! console.log creates a side effect in the outside world

const logger = msg => {
   console.log(msg);
}; // still impure

// logger('Hi there.');