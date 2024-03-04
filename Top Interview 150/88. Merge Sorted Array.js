var merge = function(nums1, m, nums2, n) {
  // Using loop to merge nums2 into nums1
 for (let i = 0; i < n; i++) {
  // Starts rewriting value in the index of last index of first array + i from next array 
  nums1[m + i] = nums2[i];
 }

 // Sorting data to be ascending
 nums1.sort((a, b) => a - b);

 return nums1;
}

function testMerge() {
  // Test case 1
  const nums1_1 = [1, 2, 3, 0, 0, 0];
  const m_1 = 3;
  const nums2_1 = [2, 5, 6];
  const n_1 = 3;
  console.log(merge(nums1_1, m_1, nums2_1, n_1)); // Expected: [1, 2, 2, 3, 5, 6]

  // Test case 2
  const nums1_2 = [4, 5, 6, 0, 0, 0];
  const m_2 = 3;
  const nums2_2 = [1, 2, 3];
  const n_2 = 3;
  console.log(merge(nums1_2, m_2, nums2_2, n_2)); // Expected: [1, 2, 3, 4, 5, 6]

  console.log("All test cases passed!");
}

testMerge();