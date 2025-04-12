// https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    let cnt = {}
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]
        if (target - current in cnt) {
            return [cnt[target - current], i]
        }
        cnt[current] = i

    }


};

const nums = [2, 7, 11, 15], target = 9
console.log(twoSum(nums, target))