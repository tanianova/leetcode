// https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }
    return i === s.length;
};

let s = "abc", t = "ahbgdc"
console.log(isSubsequence(s, t)) // true
s = "axc", t = "ahbgdc"
console.log(isSubsequence(s, t)) // false