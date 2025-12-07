function fibanacci(n) {
  const fib = [0, 1];
  for (i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log('Hello world');
console.log(fibanacci(4));
console.log(fibanacci(6));
console.log(fibanacci(9));

// Time Complexity -> Big O -> O(n)
// node src/Fibanocci.js
