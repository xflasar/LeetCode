// Author: Martin Flasar
// Date: 5/7/2023
// LeetCode: 1964. Find the Longest Valid Obstacle Course at Each Position
// URL: https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/
//


var longestObstacleCourseAtEachPosition = function (obstacles) {

    const n = obstacles.length;
    const dp = new Array(n).fill(1);
    const stack = [obstacles[0]];
    
    for (let i = 1; i < n; i++) {
      const obstacle = obstacles[i];
      if (obstacle >= stack[stack.length - 1]) {
        stack.push(obstacle);
        dp[i] = stack.length;
      } else {
        let left = 0;
        let right = stack.length - 1;
        while (left < right) {
          const mid = Math.floor((left + right) / 2);
          if (stack[mid] <= obstacle) {
            left = mid + 1;
          } else {
            right = mid;
          }
        }
        stack[left] = obstacle;
        dp[i] = left + 1;
      }
    }
    
    return dp;
  }

// Test Cases
console.log(longestObstacleCourseAtEachPosition([1,2,3,2])); // [1,2,3,3]
console.log(longestObstacleCourseAtEachPosition([2,2,1])); // [1,2,1]
console.log(longestObstacleCourseAtEachPosition([3,1,5,6,4,2])); // [1,1,2,3,2,2]
console.log(longestObstacleCourseAtEachPosition([5,1,5,5,1,3,4,5,1,4])); // [1,1,2,3,2,3,4,5,3,5]


// Runtime: 420 ms, Memory Usage: 78.3 MB