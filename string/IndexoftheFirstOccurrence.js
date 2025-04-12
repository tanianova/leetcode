// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150
// Даны две строки needle и haystack, верните индекс первого вхождения needle в haystack. Если needle не входит в haystack, верните -1.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    if (needle.length === 0) return 0; // Если needle пуст, возвращаем 0

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;
        // Сравниваем символы haystack и needle
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        // Если все символы needle совпали, возвращаем индекс i
        if (j === needle.length) {
            return i;
        }
    }

    return -1; // Если needle не найден
}

let haystack = "sadbutsad", needle = "sad"
console.log(strStr(haystack, needle)) // 0
haystack = "leetcode", needle = "leeto"
console.log(strStr(haystack, needle)) // -1
