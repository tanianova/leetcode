// https://leetcode.com/problems/merge-intervals/
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input.
// на вход подается массив интервалов (от и до). К примеру, речь идет о начале и окончании встреч.
// На выход вы должны вернуть новый массив интервалов, в котором будут помечены все занятые встречами отрезки времени.
// Если два каких-то митинга пересекаются, то в результат должен попасть один отрезок времени с самым ранним началом
// и самым поздним окончанием из этих двух встреч. Митинги также считаются пересекающимися, если один начинается ровно
// тогда, когда закончился предыдущий.

// Сложность по времени  O(n*logn), так как есть сортировка.
// По памяти так как есть сортировка, но копию не делали - O(logn), если делать с копией, то O(n)
let input1 = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
];
let input2 = [
    [4, 5],
    [1, 4],
];

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    if (intervals.length < 2) {
        // если только 1 массив, просто возвращаем его
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]); //сортируем по первому элементу массива от меньшего к большему
    let result = [intervals[0]];

    for (let interval of intervals) {
        let recent = result[result.length - 1]; // самый последний элемент в result
        if (recent[1] >= interval[0]) {
            recent[1] = Math.max(recent[1], interval[1]);
        } else {
            result.push(interval);
        }
    }

    return result;
}

console.log(merge(input1));
console.log(merge(input2));
