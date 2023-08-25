// Fibonacci number leetcode problem
// 0 1 2 3 5 8

var fib = function (n) {
  if (n < 2) {
    return n;
  }
  let prev = 0;
  let curr = 1;
  let next;
  for (let i = 2; i <= n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  return next;
};

console.log(fib(2)); // 1
console.log(fib(3)); //2
console.log(fib(4)); //3
