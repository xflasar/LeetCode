// Author: Martin Flasar
// Date: 5/3/2023
// LeetCode: 2634. Filter Elements from Array
// URL: https://leetcode.com/problems/filter-elements-from-array/
//

var filter = function(arr, fn) {
    let temparr = []
    arr.forEach((element, index) => {
        if (fn(element)) {
            temparr.push(element)
        }
        else if (fn(element, index)) {
            temparr.push(element)
        }
    })
    return temparr
}

let arr = [0, 10, 20, 30]
fn = function greaterThan10(n) { return n > 10 }
console.log(filter(arr, fn))

arr = [1,2,3]
fn = function firstIndex(n, i) { return i === 0 }
console.log(filter(arr, fn))

// Runtime: 59 ms, Memory Usage: 42.5 MB