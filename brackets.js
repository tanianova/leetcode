// https://leetcode.com/problems/valid-parentheses
// на вход нам приходит строка, содержащая только символы скобок. Следующие символы скобочек: ( ) { } [ ].
// Необходимо написать функцию, которая проверит такую строку и вернет в результате true или false — в зависимости от
// того, является ли данная последовательность скобок валидной или нет.
let s1 = '()' //true
let s2 = '()[]{}' //true
let s3 = '(]' // false
let s4 = '{[]}' // true

// сложность по времени и по памяти линейная O(n), так как есть 1 цикл по всем элементам
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    let stack = []
    let brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < s.length; i++) {
        const current = s[i]
        if (isClosedBracket(current)) {
            if (brackets[current] !== stack.pop()) return false
        } else {
            stack.push(current)
        }
    }
    return stack.length === 0;
}

function isClosedBracket(ch) {
    return [')', '}', ']'].indexOf(ch) > -1
}

console.log(s1, isValid(s1))
console.log(s2, isValid(s2))
console.log(s3, isValid(s3))
console.log(s4, isValid(s4))