// https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
// Дан массив с функциями [f1, f2, f3, ..., fn], верните новую функцию fn, которая представляет собой композицию функций из этого массива.
// Композиция функций [f(x), g(x), h(x)] определяется как fn(x) = f(g(h(x))).
// Композиция функций для пустого массива функций представляет собой идентичную функцию f(x) = x.
// Предполагается, что каждая функция в массиве принимает на вход и возвращает одно целое число.

/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function (functions) {
    if (functions.length === 0) {
        return function (x) {
            return x
        }
    }
    return function (x) {
        let result = x
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result)
        }
        return result
    }


    // return functions.reduceRight((previousFunc, nextFunc) => {
    //     return function(x){
    //         return(nextFunc(previousFunc(x)))
    //     }
    // })
};

const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9
