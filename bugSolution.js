function foo(a, b) {
  // Handle null or undefined values
  a = a === null || a === undefined ? 0 : a;
  b = b === null || b === undefined ? 0 : b; 
  return a + b; // Perform addition
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 5)); // Output: 5
console.log(foo(undefined, 3)); // Output: 3
console.log(foo(1, undefined)); //Output: 1