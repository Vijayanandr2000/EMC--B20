//leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // // let data = nums1.slice(0, m)
  // nums1.splice(m)

  // // let data = nums1.concat(nums2)

  // nums1.push(...nums2)

  // nums1.sort((a, b) => a - b)

  let i = 0,
    j = 0;
  let ans = [];

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      ans.push(nums1[i]);
      i++;
    } else {
      ans.push(nums2[j]);
      j++;
    }
  }

  while (j < n) {
    ans.push(nums2[j]);
    j++;
  }

  while (i < m) {
    ans.push(nums1[i]);
    i++;
  }

  for (let i = 0; i < ans.length; i++) {
    nums1[i] = ans[i];
  }
};
