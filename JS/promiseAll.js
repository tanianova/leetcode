// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        if (functions.length === 0) {
            resolve([])
            return
        }
        const res = new Array(functions.length).fill(null)
        let resolvedCount = 0;

        functions.forEach(async (func, idx) => {
            try {
                const subRes = await func()
                res[idx] = subRes
                resolvedCount++
                if (resolvedCount === functions.length) {
                    resolve(res)
                }
            } catch (err) {
                reject(err)
            }
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */