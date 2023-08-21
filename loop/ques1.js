// 1.  sum of all natural numbers
//sum of 1  to 5 : 15

function sumOfNaturalNumbers(n) {
  //   let sum = 0;
  //   for (let i = 1; i <= n; i++) {
  //     sum = sum + i;
  //   }
  //   return sum;

  return (n * (n + 1)) / 2;
}

console.log(sumOfNaturalNumbers(5)); //15
console.log(sumOfNaturalNumbers(10)); //55
console.log(sumOfNaturalNumbers(8)); //36
