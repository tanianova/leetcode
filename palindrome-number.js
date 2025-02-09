// https://leetcode.com/problems/palindrome-number/description/
// необходимо определить, является ли число палиндромом.
const input1 = 121 // true
const input2 = -121 // false
const input3 = 10 // false


// сложность по времени O(lg*n), так как на каждой итерации уменьшали в 10. по памяти О(1)
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    if (x < 0) return false;
    if (x % 10 === 0) return false;
    if (x < 10) return true;

    let reverse = 0;
    while (x > reverse) {
        reverse *= 10; // на каждой итерации увеличиваем разряд
        reverse += x % 10;
        x = Math.trunc(x / 10)  //обрезает дробную часть

    }

    return x === reverse || x === Math.trunc(reverse / 10)

};

console.log(isPalindrome(input1));
console.log(isPalindrome(input2));
console.log(isPalindrome(input3));