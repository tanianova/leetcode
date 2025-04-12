// https://leetcode.com/problems/palindrome-number/description/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    if (x < 0) return false;
    let reverse = 0
    let copy = x
    while (x > 0) {
        reverse = reverse * 10 + x % 10
        x = Math.floor(x / 10)

    }
    return reverse === copy


};

const x = 121
console.log(isPalindrome(x));