// https://leetcode.com/problems/climbing-stairs/description/
// Вы поднимаетесь по лестнице. Чтобы достичь вершины, нужно преодолеть n ступеней.
// Каждый раз вы можете подняться на 1 или 2 ступени. Сколько существует различных способов достичь вершины лестницы?

/**
 * @param {number} N
 * @return {number}
 */
/**
 * @param {number} n
 * @param {array} memo
 * @return {number}
 */
const climbStairs = function(n, memo = []) {
    if (n === 1)return 1;
    if (n === 2) return 2;
    if (memo[n] !== undefined) return memo[n];

    let res = climbStairs(n-1, memo) + climbStairs(n-2, memo);
    memo[n] = res;
    return res;
};

