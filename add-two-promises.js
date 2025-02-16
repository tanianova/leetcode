// https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function (promise1, promise2) {
    const result = await Promise.all([promise1, promise2])
        .then(value => value.reduce((acc, val) => acc + val))

    return result
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); // 4
