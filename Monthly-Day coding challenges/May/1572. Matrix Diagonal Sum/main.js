// Author: Martin Flasar
// Date: 5/8/2023
// LeetCode: 1572. Matrix Diagonal Sum
// URL: https://leetcode.com/problems/matrix-diagonal-sum/
//

var diagonalSum = function(mat) {
    let sum = 0;
  let left = 0;
  let right = mat.length - 1;

  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][left] + mat[i][right];

    if (left === right) {
      sum -= mat[i][left];
    }

    left++;
    right--;
  }

  return sum;
}

// Test Cases
console.log(diagonalSum([[1,2,3], [4,5,6], [7,8,9]])); // 25
console.log(diagonalSum([[1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1]])); // 8
console.log(diagonalSum([[5]])); // 5

// Runtime: 71 ms, Memory Usage: 43.9 MB