// https://leetcode.com/problems/group-anagrams/description/
// Дан массив строк strs, сгруппируйте анаграммы. Вы можете вернуть ответ в любом порядке.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let ans = {};

    for (let s of strs) {
        let key = s.split('').sort().join('');
        if (!ans[key]) {
            ans[key] = [];
        }
        // console.log(ans[key])
        console.log(ans)
        ans[key].push(s);
    }

    return Object.values(ans);
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs)) //[["bat"],["nat","tan"],["ate","eat","tea"]]