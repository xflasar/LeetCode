// Author: Martin Flasar
// Date: 5/10/2023
// LeetCode: 283. Move Zeroes
// URL: https://leetcode.com/problems/move-zeroes/
//

var moveZeroes = function (nums) {
    let zeroMoved = 0
    for (let i = 0; i < nums.length - zeroMoved; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
            zeroMoved++
            i--
        }
    }
    return nums
}

// Test Cases
console.log(moveZeroes([0, 1, 0, 3, 12])) // [1,3,12,0,0]
console.log(moveZeroes([0])) // [0]
console.log(moveZeroes([0,0,1])) // [1,0]


// Runtime: 102 ms, Memory Usage: 46.8 MB