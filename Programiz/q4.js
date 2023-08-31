//JavaScript program to swap two variables

//take input from the users
// let a = prompt("Enter the first variable: ");
// let b = prompt("Enter the second variable: ");

//create a temporary variable
// let temp;

//swap variables
// temp = a;
// a = b;
// b = temp;

// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);

//JavaScript program to swap two variables

//Example 2: Using es6(ES2015) Destructuring assignment
//take input from the users
let a = prompt("Enter the first variable: ");
let b = prompt("Enter the second variable: ");

//using destructuring assignment
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
