// https://leetcode.com/problems/array-wrapper/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Создайте класс  ArrayWrapper, который принимает массив целых чисел в своем конструкторе. Этот класс должен иметь две функции:
// При сложении двух экземпляров этого класса с помощью  + оператора результирующее значение представляет собой сумму всех элементов в обоих массивах.
// Когда  String() функция вызывается для экземпляра, она возвращает строку, разделенную запятыми, заключенную в скобки. Например, [1,2,3].

/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    this.arr=nums;
};

ArrayWrapper.prototype.valueOf = function() {
    let Sum=0;
    let arr1=this.arr;
    for(v of arr1)
    {
        Sum+=v;
    }
    return Sum;
}

ArrayWrapper.prototype.toString = function() {
    return JSON.stringify(this.arr);
}
/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */