// Function Composition

const f = x => x + 2;
const g = x => x * 3;

// composition is the act of combining functions
// so the output of one becomes the input of the
// next one

console.log(f(g(5)));

// nesting is okay, but most of the time apps don't
// have functions with single-letter names
// so nesting becomes cumbersome

const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

// with nesting, we have to think from the inside out

console.log(
   repeat(exclaim(scream('I like waking up early'))) // kind of difficult to read, no?
)

// instead, create a higher-order function

// we have an array of functions as the args below
// the order we want to call them in, though, is right to left
// so we need to reduceRight, which will accumulate the results
// of each passed function in reverse order
const compose = (...fns) => x =>
   fns.reduceRight((acc, fn) => fn(acc), x); // better read up on that reduceRight function!

const withExuberance = compose(repeat, exclaim, scream);

console.log(withExuberance('I need to go to the bathroom'));