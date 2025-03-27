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

// ------- third variant

const isValid3 = function (s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for (let bracket of s) {
        // смотрим по ключам
        if (bracket in brackets) {
            stack.push(brackets[bracket])
            console.log(stack)
        } else {
            if (stack.length === 0) return false;
            const currentClosedBracket = stack.pop()
            if (currentClosedBracket !== bracket) {
                return false;
            }
        }
    }
    return stack.length === 0
}


// ---- second variant

function isValid2(s) {
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

const s = "()[]{}" //true
console.log(isValid3(s))