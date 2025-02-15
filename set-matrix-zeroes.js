// https://leetcode.com/problems/set-matrix-zeroes/description/
// Нам дана исходная матрица, заполненная числами. Необходимо для всех ячеек, которые содержат в себе 0,
// произвести обнуление полностью всей строки и колонки, в которой такая ячейка находится. Из дополнительных условий
// указано, что необходимо решить задачу с константой по памяти O(1).

const input1 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]; // [[1,0,1],[0,0,0],[1,0,1]]

const input2 = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
]; //[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// cложность по времени O(n*m), по памяти О(1)
const setZeroes = function (matrix) {
    let ROWS = matrix.length;
    let COLS = matrix[0].length;
    let isCol = false;

    for (let i = 0; i < ROWS; i++) {
        if (matrix[i][0] === 0) {
            isCol = true;
        }

        for (let j = 1; j < COLS; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < ROWS; i++) {
        for (let j = 1; j < COLS; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }

        }
    }

    if (matrix[0][0] === 0) {

        for (let j = 0; j < COLS; j++) {
            matrix[0][j] = 0;
        }
    }

    if (isCol) {

        for (let i = 0; i < ROWS; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
};

console.log(setZeroes(input1));
console.log(setZeroes(input2));
