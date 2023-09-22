//JavaScript Program to Find the Largest Among Three Numbers

const num1 = -7;
const num2 = -5;
const num3 = -2;

let largestNum;
if (num1 >= num2 && num1 >= num3) {
  largestNum = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largestNum = num2;
} else {
  largestNum = num3;
}

console.log(`The largest number is: ` + largestNum);

// short method

const n1 = -7;
const n2 = -5;
const n3 = -1;

const result = Math.max(n1, n2, n3);
console.log(`The largest num:` + result);
