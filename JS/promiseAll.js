// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        if (functions.length === 0) {
            resolve([]);
            return;
        }
        const res = [];

        let resolvedCount = 0;

        functions.forEach((el, idx) => {
            el().then((subResult) => {
                res[idx] = subResult;
                resolvedCount++;
                if (resolvedCount === functions.length) {
                    resolve(res);
                }
            }).catch(reject)
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */