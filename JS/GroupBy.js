// https://leetcode.com/problems/group-by/description/
// Напишите код, который расширяет все массивы таким образом, чтобы можно было вызвать  array.groupBy(fn) метод для любого массива, и он вернет сгруппированную  версию массива.
// Сгруппированный массив — это объект, в котором каждый ключ является выходным значением , а каждое значение — массивом ,fn(arr[i]) содержащим все элементы исходного массива, которые генерируют этот ключ.
// Предоставленный обратный вызов  fn примет элемент в массиве и вернет строковый ключ.
// Порядок каждого списка значений должен соответствовать порядку расположения элементов в массиве. Любой порядок ключей приемлем.

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped, item) => {
        const key = fn(item);
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(item);
        return grouped;
    }, {});
};

Array.prototype.groupBy2 = function(fn) {
    let arr = this;
    let groupedObj = {};
    for(let i = 0; i<arr.length; i++){
        let key = fn(arr[i]);
        groupedObj[key] ? groupedObj[key].push(arr[i]) :  groupedObj[key] = [arr[i]];
    }
    return groupedObj;
};

console.log([1,2,3].groupBy2(String)) // {"1":[1],"2":[2],"3":[3]}
