// https://leetcode.com/problems/length-of-last-word/description/
// Дана строка s, состоящая из слов и пробелов, верните длину последнего слова в строке.
// Слово - это максимальная подстрока, состоящая только из символов, не являющихся пробелами.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let length = 0
    let i = s.length - 1
    while (i >= 0 && s[i] === ' ') {
        i--;
    }
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }
    return length
};

let s = '   fly me   to   the moon  '
console.log(lengthOfLastWord(s)) // 4