//Write a JavaScript exercise to create a variable using a user-defined name.

let varName = "abcd";
var n = 120;
this[varName] = n;
console.log(this[varName]);

//Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

function difference(n) {
  if (n <= 13) {
    return 13 - n;
  } else {
    return (n - 13) * 2;
  }
}
console.log(difference(11));
console.log(difference(45));
