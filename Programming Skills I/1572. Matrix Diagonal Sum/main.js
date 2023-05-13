// Author: Martin Flasar
// Date: 5/13/2023
// LeetCode: 1572. Matrix Diagonal Sum
// URL: https://leetcode.com/problems/matrix-diagonal-sum/
//

var diagonalSum = function(mat) {
    let sum = 0;
    const n = mat.length;
    
    for (let i = 0; i < n; i++) {
        sum += mat[i][i] + mat[i][n - i - 1];
    }
    
    if (n % 2 === 1) {
        sum -= mat[Math.floor(n/2)][Math.floor(n/2)];
    }
    
    return sum;
}


console.log(diagonalSum([[1,2,3], [4,5,6], [7,8,9]]));
console.log(diagonalSum([[1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1]]));
console.log(diagonalSum([[5]]));


// Runtime: 67 ms, Memory Usage: 44.5 MB