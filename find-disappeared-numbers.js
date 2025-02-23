// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// Дан массив nums из n целых чисел, где nums[i] находится в диапазоне [1, n], вернуть массив всех целых чисел в
// диапазоне [1, n], которые не встречаются в nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
    const cnt = new Array(nums.length + 1).fill(-1);
    for (let i = 0; i < nums.length; i++) {
        cnt[nums[i]] = nums[i]
    }
    let ans = []
    for (let i = 1; i < cnt.length; i++) {

        if (cnt[i] === -1) {
            ans.push(i)
        }
    }
    return ans
};


const nums1 = [4, 3, 2, 7, 8, 2, 3, 1] // [5,6]
const nums = [1, 1] //[2]
console.log(findDisappearedNumbers(nums1));
