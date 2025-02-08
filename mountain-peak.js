// https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
// Горный массив — это массив, который условно можно разделить на 2 части — возрастающую и убывающую,
// а на стыке этих двух частей находится пик, который нам необходимо найти. В возрастающей части числа отсортированы
// в порядке возрастания. И в убывающей — в порядке убывания. При этом может быть ситуация, когда возрастающая или
// убывающая часть полностью отсутствуют.А наивысшая точка (пик) все равно будет присутствовать.

let arr1 = [0, 1, 0] // 1
let arr2 = [0, 2, 1, 0] // 1
let arr3 = [0, 3, 10, 5, 2] // 2

// сложность алгоритма O(log*n), так как на каждой итерации уменьшаем кол-во вариантов для проверки вдвое
/**
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = function (arr) {
    let start = 0;
    let end = arr.length - 1
    while (start < end) {
        let middle = Math.floor((end - start) / 2)
        if (arr[middle] < arr[middle + 1]) {
            start = middle + 1
        } else {
            end = middle
        }
    }
    return start
};

console.log(peakIndexInMountainArray(arr1))
console.log(peakIndexInMountainArray(arr2))
console.log(peakIndexInMountainArray(arr3))