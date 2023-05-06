// Author: Martin Flasar
// Date: 5/6/2023
// LeetCode: 1. Two Sum
// URL: https://leetcode.com/problems/two-sum/
//

var twoSum = function(nums, target) {
    let result = new Map();
    for(let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if(result.has(difference)) {
            return [result.get(difference), i];
        }
        result.set(nums[i], i);
    }
    return [];
}

// Test Cases
console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6)); // [1,2]
console.log(twoSum([3,3], 6)); // [0,1]

// Runtime: 62 ms, Memory Usage: 43 MB