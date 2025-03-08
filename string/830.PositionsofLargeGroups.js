// https://leetcode.com/problems/positions-of-large-groups/description/
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
    let res = []
    let start = 0
    for (let end = 0; end < s.length; end++) {
        console.log(s[end])
        if (s[end] !== s[end + 1] || end === s.length - 1) {
            if (end - start + 1 >= 3) {
                res.push([start, end])
            }
            start = end + 1
        }
    }
    return res
};

let s = "abbxxxxzzy"
console.log(largeGroupPositions(s)) //  [[3,6]]
// s = "abcdddeeeeaabbbcd"
// console.log(largeGroupPositions(s)) //  [[3,5],[6,9],[12,14]]
// s = "abc"
// console.log(largeGroupPositions(s)) // []