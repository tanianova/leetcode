// https://leetcode.com/problems/join-two-arrays-by-id/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const join = function (arr1, arr2) {
    let joinedArray = {}

    arr1.forEach((item) => {
        joinedArray[item.id] = item
    });

    arr2.forEach((item) => {
        const { id } = item;

        joinedArray[id] = {...joinedArray[id], ...item};
    });

    return Object.values(joinedArray)
};


arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
]
arr2 = [
    {"id": 2, "x": 10},
    {"id": 3, "x": 5}
]

console.log(join(arr1, arr2))
// [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9},
//     {"id": 3, "x": 5}
// ]