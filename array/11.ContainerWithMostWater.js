// https://leetcode.com/problems/container-with-most-water
// На вход нам подается массив с числами. Каждое число представляет собой вертикальную линию заданной высоты.
// Все линии находятся друг от друга на расстоянии 1. Нам необходимо найти такие 2 линии (2 числа) из этого массива,
// которые, образуя "контейнер", дадут максимально возможное количество воды. В качестве ответа необходимо вернуть
// максимальный "объем" воды для данного массива с числами.

const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7] //49
const input2 = [1, 1] //1
const input3 = [4, 3, 2, 1, 4] //16
const input4 = [1, 2, 1] //2

// сложность алгоритма с двумя указателями по времени линейная O(n), по памяти-константа O(1)
/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let maxArea = 0;

    let left = 0
    let right = height.length - 1

    while (left < right) {
        let currentVolume = Math.min(height[left], height[right]) * (right - left)
        maxArea = Math.max(maxArea, currentVolume)
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return maxArea
}

console.log(maxArea(input1));
console.log(maxArea(input2));
console.log(maxArea(input3));
console.log(maxArea(input4));