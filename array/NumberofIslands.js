// https://leetcode.com/problems/number-of-islands/
// необходимо посчитать кол-во островов в матрице. островом считаются единицы, которые находятся друг рядом с другом
// по горизонтали и вертикали. Водой считаются ячейки матрицы с нулями
let Input1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
] // 1
let Input2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
] // 3

// сложность алгоритма по времени O(n*m)
/**
 * @param {string[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
    let counter = 0;
    let rowsLength = grid.length;
    let colsLength = grid[0].length;

    if (rowsLength === 0) return 0;

    function markNeighbour(grid, row, col) {
        grid[row][col] = '6';
        if (grid[row][col - 1] === '1') {
            markNeighbour(grid, row, col - 1)
        }
        if (grid[row][col + 1] === '1') {
            markNeighbour(grid, row, col + 1)
        }
        if (grid?.[row - 1]?.[col] === '1') {
            markNeighbour(grid, row - 1, col)
        }
        if (grid?.[row + 1]?.[col] === '1') {
            markNeighbour(grid, row + 1, col)
        }

    }

    for (let row = 0; row < rowsLength; row++) {
        for (let col = 0; col < colsLength; col++) {
            if (grid[row][col] === '1') {
                counter++
                markNeighbour(grid, row, col)
            }

        }
    }

    return counter
};

console.log(numIslands(Input1))
console.log(numIslands(Input2))