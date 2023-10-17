//Check whether a given positive number is a multiple of 3 or a multiple of 7

function checknum(x) {
  if (x % 3 === 0 || x % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checknum(12));
console.log(checknum(14));
console.log(checknum(13));
console.log(checknum(16));
