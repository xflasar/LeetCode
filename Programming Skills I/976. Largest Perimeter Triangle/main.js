// Author: Martin Flasar
// Date: 5/8/2023
// LeetCode: 976. Largest Perimeter Triangle
// URL: https://leetcode.com/problems/largest-perimeter-triangle/
//

var largestPerimeter = function (nums) {
    nums.sort((a, b) => b - a)

    for (let i = 0; i < nums.length - 2; i++) {
        let a = nums[i];
        let b = nums[i + 1];
        let c = nums[i + 2];

        if (a < b + c) {
            return a + b + c;
        }
    }
    return 0;
}

// Test Cases
console.log(largestPerimeter([2, 1, 2])); // 5
console.log(largestPerimeter([1, 2, 1])); // 0
console.log(largestPerimeter([3, 2, 3, 4])); // 10