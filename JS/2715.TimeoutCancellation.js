// https://leetcode.com/problems/timeout-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Если задана функция fn, массив аргументов  args и время ожидания  t в миллисекундах, вернуть функцию отмены cancelFn.
// После задержки будет вызвана cancelTimeMs возвращенная функция отмены .cancelFn
// Первоначально выполнение функции fn должно быть задержано на t миллисекунды.
// Если до задержки в t миллисекундах функция cancelFn вызывается, она должна отменить отложенное выполнение fn.
// В противном случае, если cancelFn не вызывается в течение указанной задержки t, fn должна быть выполнена с предоставленными args в качестве аргументами.

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = function(fn, args, t) {
    const cancelFn = function (){
        clearTimeout(timer);
    };
    const timer = setTimeout(()=>{
        fn(...args)
    }, t);
    return cancelFn ;
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */