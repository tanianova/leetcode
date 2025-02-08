// https://leetcode.com/problems/search-in-rotated-sorted-array/
// необходимо найти число в отсортированном и сдвинутом массиве
let nums = [4, 5, 6, 7, 0, 1, 2], target1 = 0, target2 = 3

// сложность алгоритма O(log*n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) return mid
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (nums[mid <= target && target <= nums[right]]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
};

console.log(search(nums, target1))
console.log(search(nums, target2))