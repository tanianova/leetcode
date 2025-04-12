// https://leetcode.com/problems/reverse-string/description/
// Напишите функцию, которая переворачивает строку. Входная строка задана как массив символов s.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++
        right--
    }
    return s
};

const s = ["h", "e", "l", "l", "o"]
console.log(reverseString(s)) // ["o","l","l","e","h"]