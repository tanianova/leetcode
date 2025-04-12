// https://leetcode.com/problems/longest-common-prefix/description/?envType=study-plan-v2&envId=top-interview-150
// Дан массив строк strs, найдите и верните самую длинную общую префиксную строку среди этого массива строк.
// Если общего префикса нет, верните пустую строку "".

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ""
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) === -1) {
            prefix = prefix.slice(0, -1)
            if (prefix === '') return ''
        }
    }
    return prefix
};

const longestCommonPrefix2 = function (strs) {
    let prev = strs[0]
    let prevLen = prev.length;
    for (let i = 1; i < strs.length; i++) {
        let current = strs[i];
        while (prev !== current.substring(0, prevLen)) {
            prevLen--
            if (prevLen === 0) return ''
            prev= prev.substring(0,prevLen);
        }
    }
    return prev
};


let strs = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs)) // "fl"
// strs = ["dog", "racecar", "car"]
// console.log(longestCommonPrefix(strs)) // ""