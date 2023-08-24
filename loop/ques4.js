//4. leetcode palindrome problem

var isPalindrome = function (x) {
  // Handle negative numbers
  if (x < 0) {
    return false; // Negative numbers are not palindromes
  }

  let copyNum = x;
  reverseNum = 0;
  while (copyNum > 0) {
    const lastDigit = copyNum % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    copyNum = Math.floor(copyNum / 10);
  }
  return x === reverseNum;
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
