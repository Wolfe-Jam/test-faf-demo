// Simple demo functions

function greet(name) {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// Run demo
console.log(greet("FAF"));
console.log("2 + 3 =", add(2, 3));
console.log("4 * 5 =", multiply(4, 5));

module.exports = { greet, add, multiply };
