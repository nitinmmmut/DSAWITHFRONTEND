//JavaScript: Find the largest of three given integers

function maxInt(x, y, z) {
  maxval = 0;
  if (x > y) {
    maxval = x;
  } else {
    maxval = y;
  }
  if (z > maxval) {
    maxval = z;
  }
  return maxval;
}

console.log(maxInt(1, 0, 1));
console.log(maxInt(0, -10, -20));
console.log(maxInt(1000, 510, 440));
