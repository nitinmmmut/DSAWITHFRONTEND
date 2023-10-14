//Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

function first_lastChar(str1) {
  if (str1.length <= 1) {
    return str1;
  }
  mid_char = str1.substring(1, str1.length - 1);
  return str1.charAt(str1.length - 1) + mid_char + str1.charAt(0);
}

console.log(first_lastChar("a"));
console.log(first_lastChar("ba"));
console.log(first_lastChar("tyagi"));
