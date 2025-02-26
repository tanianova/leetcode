// https://leetcode.com/problems/longest-common-prefix/description/
// Дан массив строк strs, найдите и верните самую длинную общую префиксную строку среди этого массива строк.
// Если общего префикса нет, верните пустую строку "".

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
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

const strs = ["flower", "flow", "flight"]
const strs1 = ["dog", "racecar", "car"]
console.log(longestCommonPrefix(strs)); // fl
console.log(longestCommonPrefix(strs1)); // ''