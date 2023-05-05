// Author: Martin Flasar
// Date: 5/4/2023
// LeetCode: 1491. Average Salary Excluding the Minimum and Maximum Salary
// URL: https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
//

var average = function(salary) {
    salary.sort((a, b) => a - b);
    salary.pop();
    salary.shift();
    let sally = new Float64Array(salary);
    console.log(typeof sally)
    return (sally.reduce((a, b) => a + b) / sally.length).toFixed(5);
};

// Test Cases
console.log(average([4000,3000,1000,2000])); // 2500.00000
console.log(average([1000,2000,3000])); // 2000.00000
console.log(average([6000,5000,4000,3000,2000,1000])); // 3500.00000
console.log(average([48000,59000,99000,13000,78000,45000,31000,17000,39000,37000,93000,77000,33000,28000,4000,54000,67000,6000,1000,11000])); // 41111.11111
console.log(average([437000,373000,235000,269000,465000,342000,133000,218000,344000,157000,330000,246000,446000,47000,382000,97000,407000,163000,95000,250000,438000,141000,423000,65000,155000,138000,37000,135000,21000,440000,353000,178000])); // 249133.33333

// Runtime: 55 ms, Memory Usage: 42 MB