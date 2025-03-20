// https://leetcode.com/problems/promise-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript
//Учитывая асинхронную функцию fn и время t в миллисекундах, вернуть новую ограниченную по времени версию входной функции.
// fn принимает аргументы, предоставленные ограниченной по времени функции.
// Ограниченная по времени функция должна соответствовать следующим правилам:
// Если fn выполнение завершается в течение лимита времени в t миллисекундах, функция с ограничением по времени должна разрешиться с результатом.
// Если выполнение функции fn превышает лимит времени, функция с ограничением по времени должна отклониться со строкой "Time Limit Exceeded".

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            // Create a timeout that rejects the promise after t milliseconds
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            // Call the provided function and handle its resolution or rejection
            fn(...args)
                .then((result) => {
                    clearTimeout(timer); // Clear the timeout if function resolves in time
                    resolve(result);
                })
                .catch((error) => {
                    clearTimeout(timer); // Clear the timeout if function rejects in time
                    reject(error);
                });
        });
    };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */