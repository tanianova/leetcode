// https://leetcode.com/problems/trapping-rain-water
// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.
// на вход подается массив с высотой рельефа. Представим себе, что каждая "ячейка" рельефа у нас шириной 1 и высотой той,
// которая задана в конкретном элементе массива. Наша задача посчитать, какое количество элементов (юнитов)
// воды может накопиться в таком рельефе, если пройдет дождь. длина массива может быть от 1 до 10 000, а значения элементов в массиве могут быть от 0 до 100 000.
const input1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; // 6
const input2 = [4, 2, 0, 3, 2, 5]; // 9
/**
 * @param {number[]} height
 * @return {number}
 */
let trap = function (height) {
    let maxLeft = height[0]
    let maxRight = height[height.length - 1]

    let left = 1
    let right = height.length - 2
    let total = 0

    while (left <= right) {
        if (maxLeft <= maxRight) {
            maxLeft = Math.max(maxLeft, height[left]);
            total += maxLeft - height[left];
            left += 1
        } else {
            maxRight = Math.max(maxRight, height[right]);
            total += maxRight - height[right];
            right -= 1
        }
    }
    return total
};

console.log(trap(input1));
console.log(trap(input2));