// Author: Martin Flasar
// Date: 5/10/2023
// LeetCode: 1588. Sum of All Odd Length Subarrays
// URL: https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
//

var sumOddLengthSubarrays = function (arr) {
    let result = 0
    arr.forEach((element, index) => {
        let odd = 1
        while (index + odd <= arr.length) {
            let temparr = arr.slice(index, index + odd)
            temparr.forEach((element) => {
                result += element;
            })
            odd += 2
        }
    })

    return result
}

// Test Cases
console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])) // 58
console.log(sumOddLengthSubarrays([1, 2])) // 3
console.log(sumOddLengthSubarrays([10, 11, 12])) // 66

// Runtime: 65 ms, Memory Usage: 48.3 MB