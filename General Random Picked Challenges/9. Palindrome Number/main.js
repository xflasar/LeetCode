// Author: Martin Flasar
// Date: 5/6/2023
// LeetCode: 9. Palindrome Number
// URL: https://leetcode.com/problems/palindrome-number/
//

var isPalindrome = function(x) {
    if(x < 0) return false
    let result = parseInt(String(x).split('').map((x) => {return Number(x)}).reverse().join(''))
    return x === result;
}

// Test Cases
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(-101)); // false

// Runtime: 200 ms, Memory Usage: 52 MB