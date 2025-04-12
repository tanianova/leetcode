// https://leetcode.com/problems/first-unique-character-in-a-string/
// необходимо написать функцию, которая принимает в качестве аргумента строку и возвращает индекс первого уникального
// символа. если мы не найдем ни одного, то функция должна вернуть -1
const input1 = 'leetcode'; // 0
const input2 = 'loveleetcode'; // 2
const input3 = 'aabb'; // -1

// сложность по времени O(n), так как проходим 2 цикла, но не вложенных. по памяти O(1) (так как в англ алфавите фиксированное кол-во символов)
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        if (map.has(current)) {
            map.set(current, map.get(current) + 1)
        } else {
            map.set(current, 1)
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i
        }
    }
    return -1
};

console.log(firstUniqChar(input1));
console.log(firstUniqChar(input2));
console.log(firstUniqChar(input3));
