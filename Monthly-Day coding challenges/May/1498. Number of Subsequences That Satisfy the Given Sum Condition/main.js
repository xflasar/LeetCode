// Author: Martin Flasar
// Date: 5/6/2023
// LeetCode: 1498. Number of Subsequences That Satisfy the Given Sum Condition
// URL: https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
//

var numSubseq = function(nums, target) {
    let result = 0;
    let mod = 1000000007;
    let pow = [];

    pow.push(1);
    
    nums.sort((a, b) => a - b);

    // We have to create a pow array because Math.pow() is not including mod since higher numbers are not precise
    for (let i = 1; i < nums.length; i++) {
        pow.push((pow[pow.length - 1] * 2) % mod);
    }

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if(nums[left] + nums[right] > target) {
            right--;
        } else {
            result = (result + pow[right - left]) % mod;
            left++;
        }
    }
    return result;
}

// Test Cases
console.log(numSubseq([3,5,6,7], 9)); // 4
console.log(numSubseq([3,3,6,8], 10)); // 6
console.log(numSubseq([2,3,3,4,6,7], 12)); // 61
console.log(numSubseq([9,25,9,28,24,12,17,8,28,7,21,25,10,2,16,19,12,13,15,28,14,12,24,9,6,7,2,15,19,13,30,30,23,19,11,3,17,2,14,20,22,30,12,1,11,2,2,20,20,27,15,9,10,4,12,30,13,5,2,11,29,5,3,13,22,5,16,19,7,19,11,16,11,25,29,21,29,3,2,9,20,15,9], 32)); // 91931447

// Runtime: 198 ms, Memory Usage: 56.9 MB