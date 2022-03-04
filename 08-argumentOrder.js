// Argument Order

// order of arguments in non-curried fns is somewhat trivial and
// often just a matter of preference
let map = (array, cb) => array.map(cb);
// we need both args for the fn to work -- can't partially apply

// if we take in the array as first argument in a curried version
// of map, it locks us in so all we can change is the callback
map = array => cb => array.map(cb);
const arr = [1, 2, 3, 4, 5];
const double = n => n * 2;
const withArr = map(arr);
// the only thing we can change here is the callback
// not great!
console.log(withArr(double));
console.log(withArr(n => n * 3));

// instead, if we change the argument order, we can
// get more utility from the function

map = cb => array => array.map(cb);
const withDouble = map(double);

console.log(withDouble(arr));
console.log(withDouble([2,4,6,8,10]));

// Order args from most specific to least specific!
// in every case, the least specific is going to be the data
const prop = key => obj => obj[key];

// using above, we can create partially-applied functions designed
// to retrieve values out of any object 
const propName = prop('name');

const people = [
   {name: 'Mary'},
   {name: 'Jeff'},
   {name: 'Louis'},
   {name: 'Juan Carlos'},
   {name: 'Robert'}
];

console.log(map(propName)(people)); // OH MAN, THE POWER