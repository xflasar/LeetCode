// Author: Martin Flasar
// Date: 5/9/2023
// LeetCode: 202. Happy Number
// URL: https://leetcode.com/problems/happy-number/
//

var isHappy = function(n) {
    let arr = n.toString().split('');
    let sum = 0;
    while (true){
        sum = arr.map(x => x * x).reduce((a, b) => a + b);
        arr = sum.toString().split('');
        if (sum === 1 || sum === 4) break;
    }

    return sum === 1 ? true : false;
}

// Test Cases
console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
console.log(isHappy(1111111)); // true

// Runtime: 45 ms (Beats 99.59%), Memory Usage: 44.1 MB