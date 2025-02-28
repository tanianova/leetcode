// https://leetcode.com/problems/valid-parentheses/description/
// Дана строка s, содержащая символы '(', ')', '{', '}', '[' и ']', определите, является ли строка валидной.
// Входная строка валидна, если:
// Открывающая скобка закрыта скобкой того же типа.
// Открывающие скобки закрыты в правильном порядке.
// Каждой закрывающей скобке соответствует открывающая скобка того же типа.

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    let stack = []
    let brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (let i = 0; i < s.length; i++) {
        const current = s[i]
        if (current === '(' || current === '{' || current === '[') {
            stack.push(current)
        } else if (current === ')' || current === '}' || current === ']') {
            if (!stack.length || brackets[current] !== stack.pop()) return false
        }
    }
    return stack.length === 0
};

const s = "()[]{}" //true
console.log(isValid(s))