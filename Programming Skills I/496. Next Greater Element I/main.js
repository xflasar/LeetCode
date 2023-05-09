// Author: Martin Flasar
// Date: 5/9/2023
// LeetCode: 496. Next Greater Element I
// URL: https://leetcode.com/problems/next-greater-element-i/
//

var nextGreaterElement = function (nums1, nums2) {
    let left = 0
    let right = nums2.indexOf(nums1[left])
    let result = []

    while (left < nums1.length)
    {
        
        if (nums1[left] < nums2[right])
        {
            result.push(nums2[right])
            left++
            right = nums2.indexOf(nums1[left])
        }
        else
        {
            if(right === nums2.length - 1) {
                result.push(-1)
                left++
                right = nums2.indexOf(nums1[left])
                continue
            }
            right++
        }
    }
    return result
}

// Test Cases
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3,-1]
console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7])); // [7,7,7,7,7]

// Runtime: 64 ms (Beats 72.26%), Memory Usage: 43.3 MB (Beats 86.13%)