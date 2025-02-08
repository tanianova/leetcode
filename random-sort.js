// https://leetcode.com/problems/shuffle-the-array/
// отсортировать случайным образом
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// сложность алгоритма O(nˆ2). так как splice операция O(n), и мы это делаем n раз. По памяти O(n), так как все пушим в результирующий результат
// более эффективный алгоритм - алгоритм фишера йейтса (Fisher-Yates). так как мы на месте все меняем, сложность по времени O(n), по памяти О(1)
/**
 * @param {number[]} nums
 */
const shuffle = function (nums) {
    for (let i = nums.length - 1; i > 0; i--) {
        let tmp = nums[i]
        let rnd = Math.floor(Math.random() * (i + 1))

        nums[i] = nums[rnd]
        nums[rnd] = tmp
    }
    return nums
};

for (let i = 0; i < 10; i++) {
    console.log(shuffle(input).join(','));
}