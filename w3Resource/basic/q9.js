//Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.

function diffNum(n) {
  if (n <= 19) {
    return 19 - n;
  } else {
    return (n - 19) * 3;
  }
}

console.log(diffNum(12));
console.log(diffNum(19));
console.log(diffNum(22));
