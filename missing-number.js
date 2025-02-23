// https://leetcode.com/problems/missing-number/description/
// Дан массив nums, содержащий n уникальных чисел в диапазоне [0, n], верните единственное недостающее в
// массиве nums число, которое входит в этот диапазон.

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
    let cnt = new Array(nums.length + 1).fill(-1);

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        cnt[current] = current;
    }
    for (let i = 0; i < cnt.length; i++) {
        if (cnt[i] === -1) return i;
    }
    return 0;

};

const nums = [3, 0, 1]
console.log(missingNumber(nums)); //2