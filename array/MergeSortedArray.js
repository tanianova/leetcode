// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1
    let p = m + n - 1
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2]
            p2--
        }
        p--;
    }

    // Если в nums2 остались элементы, копируем их
    while (p2 >= 0) {
        nums1[p] = nums2[p2]
        p2--
        p--
    }
    return nums1
};

let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
console.log(merge(nums1, m, nums2, n)) // [1,2,2,3,5,6]
nums1 = [1], m = 1, nums2 = [], n = 0
console.log(merge(nums1, m, nums2, n)) // [1]
nums1 = [0], m = 0, nums2 = [1], n = 1
console.log(merge(nums1, m, nums2, n)) // [1]

