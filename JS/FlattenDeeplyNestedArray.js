// https://leetcode.com/problems/flatten-deeply-nested-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Для заданного  многомерного массива  arr и глубины n вернуть  сглаженную  версию этого массива.
// Многомерный  массив — это рекурсивная структура данных, содержащая целые числа или другие  многомерные массивы  .
// Сглаженный  массив —  это версия этого массива, в которой некоторые или все подмассивы удалены и заменены фактическими элементами этого подмассива.
// Эту операцию выравнивания следует выполнять только в том случае, если текущая глубина вложенности меньше  n. Глубина элементов в первом массиве считается равной  0.
// Пожалуйста, решите это без встроенного  Array.flat метода.

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function(arr, depth) {
    const stack = [...arr.map(item => [item, depth])];
    const result = [];

    while (stack.length > 0) {
        const [item, depth] = stack.pop();

        if (Array.isArray(item) && depth > 0) {
            stack.push(...item.map(subItem => [subItem, depth - 1]));
        } else {
            result.push(item);
        }
    }

    return result.reverse();
};