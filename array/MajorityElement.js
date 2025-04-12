// https://leetcode.com/problems/majority-element/description/
// Преобладающий элемент — элемент, который встречается в массиве более ⌊n / 2⌋ раз.
// Предполагается, что в массиве всегда есть преобладающий элемент.

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
    let map = {}
    let k = Math.floor(nums.length / 2); // преобладающий элемент
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        if (map[curr]) {
            map[curr] += 1
        } else {
            map[curr] = 1
        }
        if (map[curr] > k) {
            return curr
        }
    }

};

const majorityElement2 = function (nums) {
    let hashTable = {};
    let max = 0;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        hashTable[curr] = (hashTable[curr] || 0) + 1
        if (hashTable[curr] > max) {
            max = hashTable[curr]
            res = curr
        }
    }
    return res
}

let nums = [3, 2, 3]
console.log(majorityElement(nums)); // 3
nums = [2, 2, 1, 1, 1, 2, 2]
console.log(majorityElement(nums)); // 2