// необходимо реализовать функцию scramble(str1, str2), которая возвращает true, если часть символов
// строки str1 может быть переставлена для соответствия строке str2
//  в противном случае функция должна возвращать false

function scramble(str1, str2) {
    const count = {}
    for (let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!count[char]) {
            return false
        }
        count[char]--;
    }
    return true
}

console.log(scramble('scriptingjava', 'javascript')) // true
console.log(scramble('abc', 'a')) // true
console.log(scramble('abc', 'd')) // false
