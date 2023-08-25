//6. missing number leetcode problem
//input: num=[3,0,1] o/p=2;
//1+0+3=4, 1+2+3+0=6; 6-4=2

var missingNumber = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return (nums.length * (nums.length + 1)) / 2 - sum;

  //   return (
  //     (nums.length * (nums.length + 1)) / 2 - nums.reduce((acc, num) => num + acc)
  //   );
};

// var nums = [3, 0, 1];
// console.log(missingNumber(nums)); //2

// example i/p array
var nums = [3, 0, 1, 4, 6, 2];
var result = missingNumber(nums);
// console.log("missing number:", result);
console.log(result);
