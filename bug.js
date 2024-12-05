function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  }
  return x.length; // Assume x is an array or string
}

console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: TypeError: Cannot read properties of undefined (reading 'length')