//Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

function frontback(str) {
  if (str.length >= 3) {
    stringLength = 3;
    back = str.substring(str.length - 3);
    return back + str + back;
  } else return false;
}
console.log(frontback("abc"));
console.log(frontback("a"));
console.log(frontback("abcd"));
