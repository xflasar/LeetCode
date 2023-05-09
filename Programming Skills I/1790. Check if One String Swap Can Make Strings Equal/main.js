// Author: Martin Flasar
// Date: 5/9/2023
// LeetCode: 1790. Check if One String Swap Can Make Strings Equal
// URL: https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/
//

var areAlmostEqual = function(s1, s2) {
    let diff = 0;
    let diffIndex = [];

    // First we loop thru both strings and compare each character (we can use s1.length or s2.length since they are the same length)
    for(let i = 0; i < s1.length; i++){
        if(s1[i] !== s2[i]){
            diff++;
            diffIndex.push(i);
        }
    }
    // If there are no differences, return true
    if(diff === 0) return true;
    // If there are more than 2 differences, return false otherwise we check if the characters at the different indexes are the same
    if(diff === 2){
        if(s1[diffIndex[0]] === s2[diffIndex[1]] && s1[diffIndex[1]] === s2[diffIndex[0]]) return true;
    }
    return false;
}

// Test Cases
console.log(areAlmostEqual("bank", "kanb")); // true
console.log(areAlmostEqual("attack", "defend")); // false
console.log(areAlmostEqual("kelb", "kelb")); // true

// Runtime: 56 ms, Memory Usage: 41.8 MB