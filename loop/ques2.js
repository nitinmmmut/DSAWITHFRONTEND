// find the sum of digits of a number
// 1287   1+2+8+7=18
//1287      Q =1287%10=7 Remainder= 7+8+2+1=18

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sumOfDigits(1287)); //18
