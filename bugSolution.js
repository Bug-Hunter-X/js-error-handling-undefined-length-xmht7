function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined cases
  }
  return x.length; // Assume x is an array or string
}

console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0