// Author: Martin Flasar
// Date: 5/6/2023
// LeetCode: 1456. Maximum Number of Vowels in a Substring of Given Length
// URL: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
//

var maxVowels = function (s, k) {
    let max = 0;

    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) {
            max++;
        }
    }

    let count = max;

    for (let i = k; i < s.length; i++) {
        if (isVowel(s[i])) {
            count++;
        }
        if (isVowel(s[i - k])) {
            count--;
        }
        if (count > max) {
            max = count;
        }
    }
    return max;
}

function isVowel(c) {
    return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
}

// Test Cases
console.log(maxVowels("abciiidef", 3)); // 3
console.log(maxVowels("aeiou", 2)); // 2
console.log(maxVowels("leetcode", 3)); // 2
console.log(maxVowels("rhythms", 4)); // 0
console.log(maxVowels("tryhard", 4)); // 1

// Runtime: 89 ms, Memory Usage: 45.3 MB