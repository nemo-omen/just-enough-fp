// Pointfree programming
const array = [1, 2, 3];

// we frequently use anonymous functions in methods
// like Array.map. Unfortunately, these act as interim variables
// and they don't really tell us anything about the data we're
// passing in
const plainMapped = array.map(x => x * 2);
console.log('plainMapped: ', plainMapped); // [2, 4, 6]

// to remedy this, we can use pointfree programming
// rather than pass an anonymous function to the method
// we can explicitly create a named function that
// produces the result we want and then pass that to
// the method

const double = x => x * 2;

const pointFreeMapped = array.map(double);
console.log('pointFreeMapped: ', pointFreeMapped); // [2, 4, 6]

// What do we gain?
// Legibility
// Reduce surface area for bugs
// We can unit test our named functions