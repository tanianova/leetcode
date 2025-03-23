// https://leetcode.com/problems/intersection-of-two-arrays-ii/
// необходимо написать функцию, которая принимает на вход два массива с числами. на выходе мы должны вернуть новый массив,
// который будет в себе содержать только те элементы, которые встречались в обоих массивах.
// если в первом массиве у нас было три двойки, а во втором массиве было 4 двойки-в результирующем массиве их должно быть три.

let nums1 = [1, 2, 2, 1], nums2 = [2, 2] // [2,2]
let nums3 = [4, 9, 5], nums4 = [9, 4, 9, 8, 4] // [4,9]

// сложность по времени O(n+m), по памяти O(n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
    let result = [];
    let map = nums1.reduce((acc, i) => {
        acc[i] = acc[i] ? acc[i] + 1 : 1

        return acc
    }, {})
    for (let i = 0; i < nums2.length; i++) {
        const current = nums2[i]
        let count = map[current]
        if (count && count > 0) {
            result.push(current)
            map[current] -= 1
        }
    }

    return result
}

console.log(intersect(nums1, nums2))
console.log(intersect(nums3, nums4))