// https://leetcode.com/problems/array-prototype-last/?envType=study-plan-v2&envId=30-days-of-javascript
// Напишите код, который улучшает все массивы так, что вы можете вызвать  array.last() метод для любого массива, и он вернет последний элемент. Если в массиве нет элементов, он должен вернуть  -1.
// Вы можете предположить, что массив является выводом JSON.parse.

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    if (this.length === 0) return -1
    return this[this.length - 1]
};


const arr = [1, 2, 3];
console.log(arr.last()); // 3
