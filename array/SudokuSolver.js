// https://leetcode.com/problems/sudoku-solver/
// Write a program to solve a Sudoku puzzle by filling the empty cells.
// A sudoku solution must satisfy all of the following rules:
// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.
let input1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

let input2 = [
    ['4', '.', '1', '.'],
    ['.', '2', '.', '.'],
    ['.', '.', '3', '.'],
    ['.', '.', '2', '.'],
]

let solveSudoku = function(board) {
    const size = 9;
    const boxSize = 3;

    const findEmpty = (board) => {
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                if(board[r][c] === '.') {
                    return [r,c];
                }
            }
        }
        return null;
    }

    const validate = (num, pos, board) => {
        const [r,c] = pos;

        //Check rows
        for (let i = 0; i < size; i++) {
            if (board[i][c] === num && i !== r) {
                return false;
            }
        }

        //Check cols
        for (let i = 0; i < size; i++) {
            if (board[r][i] === num && i !== c) {
                return false;
            }
        }


        //Check box
        const boxRow = Math.floor( r/boxSize ) * boxSize;
        const boxCol = Math.floor( c/boxSize ) * boxSize;

        for (let i = boxRow; i < boxRow + boxSize; i++) {
            for (let j = boxCol; j < boxCol + boxSize; j++) {
                if (board[i][j] === num && i !== r && j !== c) {
                    return false;
                }
            }
        }

        return true;
    }

    const solve = () => {
        const currPos = findEmpty(board);

        if (currPos === null) {
            return true;
        }
        //console.log('------------------------------');
        for (let i = 1; i < size + 1; i++) {
            const currNum = i.toString();
            const isValid = validate(currNum, currPos, board);
            //console.log('currPos ', currPos, 'currNum ',currNum, 'isValid ',isValid);
            if (isValid) {
                const [x,y] = currPos;
                board[x][y] = currNum;

                if(solve()) {
                    return true;
                }

                board[x][y] = '.';
            }
        }

        return false;
    }

    solve();
    return board;
};

console.log(solveSudoku(input1))