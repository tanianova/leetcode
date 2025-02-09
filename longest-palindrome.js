// https://leetcode.com/problems/longest-palindromic-substring/
// на вход подается строка, на выходе функция должна вернуть самую длинную подстроку палиндром

const input1 = "babad" // "bab"
const input2 = "cbbd" // "bb"
const input3 = "ac" // "a" | "c"

// сложность алгоритма по времени O(nˆ2), так как в цикле проходим функцией expand, которая также может проходить по всей строке
/**
 * @param {string} string
 * @return {string}
 */
const longestPalindrome = function (string) {
    let start = 0;
    let end = 0;
    for (let i = 0; i < string.length; i++) {
        let len1 = expandFromCenter(string, i, i) // для нечетных
        let len2 = expandFromCenter(string, i, i + 1) // для четных
        let len = Math.max(len1, len2)

        if (len > end - start) {
            start = Math.ceil(i - (len - 1) / 2)
            end = Math.floor(i + len / 2)
        }
    }

    function expandFromCenter(string, left, right) {
        while (left >= 0 && right < string.length && string[left] === string[right]) {
            left--;
            right++;
        }
        return right - left - 1; // длина палиндрома
    }

    return string.substring(start, end + 1);
};

console.log(longestPalindrome(input1));
console.log(longestPalindrome(input2));
console.log(longestPalindrome(input3));