// https://leetcode.com/problems/maximum-difference-between-increasing-elements/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let minVal = nums[0]
    let maxDiff = -1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > minVal) {
            let currDiff = nums[i] - minVal
            if (currDiff > maxDiff) {
                maxDiff = currDiff
            }
        } else {
            minVal = nums[i]
        }
    }
    return maxDiff
};