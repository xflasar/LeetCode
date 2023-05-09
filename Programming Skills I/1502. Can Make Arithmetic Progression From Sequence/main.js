// Author: Martin Flasar
// Date: 5/9/2023
// LeetCode: 1502. Can Make Arithmetic Progression From Sequence
// URL: https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
//

var canMakeArithmeticProgression = function (arr) {
    if(arr.length < 3) return true;
    let diffAsc = false;
    let diffDesc = false;
    let diff = false;
    
    // Sorting the array in ascending order
    arr.sort((a, b) => a - b);

    // Calculating the difference between the first two elements
    let difference = 0;
    difference = arr[1] - arr[0];

    for (let i = 2; i < arr.length; i++) {
        if ((arr[i] - arr[i - 1]) !== difference) {
            diffAsc = false;
            break;
        }
        else {
            diffAsc = true;
        }
    }
    ((arr[2] - arr[1]) !== difference) ? diffAsc = false : diffAsc = true;
    // Sorting the array in descending order
    arr.sort((a, b) => b - a);

    // Calculating the difference between the first two elements
    difference = arr[1] - arr[0];

    for (let i = 2; i < arr.length; i++) {
        if ((arr[i] - arr[i - 1]) !== difference) {
            diffDesc = false;
            break;
        }
        else {
            diffDesc = true;
        }
    }
    
    (diffAsc && diffDesc) ? diff = true : diff = false;

    return diff;
}

// Test Cases
console.log(canMakeArithmeticProgression([3, 5, 1])); // true
console.log(canMakeArithmeticProgression([1, 2, 4])); // false
console.log(canMakeArithmeticProgression([1, 2, 3, 4])); // true
console.log(canMakeArithmeticProgression([1, 100])); // true
console.log(canMakeArithmeticProgression([1,2,3,7,9,10,11])); // true

// Runtime: 73 ms, Memory Usage: 42.2 MB