// Дана последовательность Фиббоначи(следующие число, равно суммы двух его предыдущих
// [0,1,1,2,3,5,8,13....]
// Нужно написать функцию, которая может рассчитать любой член этой последовательности
// На вход функция получает индекс элемента

function fibonacci(n) {
    if (n < 0) return 'error'
    if (n === 0) return 0
    if (n === 1) return 1

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, b + a]
        // или
        // let temp = a + b;
        // a = b;
        // b = temp;
    }
    return b
}

// 2 вариант
const fib = n => {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

// 3 вариант
function fibonacci1(n) {
    if (n <= 1) return n;
    return fibonacci1(n - 1) + fibonacci1(n - 2);
}

// Пример использования:
const index = 7;
console.log(`Число Фибоначчи с индексом ${index} равно ${fibonacci(index)}`); // 3
