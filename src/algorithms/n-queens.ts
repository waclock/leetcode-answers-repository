// https://leetcode.com/problems/n-queens
// Backtracking
/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n: number): string[] {
  const res = [];
  const board = new Array(n).fill(x => x).map(_ => new Array(n).fill('.'));

  const isValid = (cur, row, col) => {
    for (let i = 0; i < row; i++) {
      if (cur[i][col] == 'Q') return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (cur[i][j] == 'Q') return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < cur.length; i--, j++) {
      if (cur[i][j] == 'Q') return false;
    }

    return true;
  };

  const dfs = (cur, row) => {
    if (row == cur.length) {
      return res.push(cur.map(x => x.join('')));
    }
    for (let col = 0; col < cur.length; col++) {
      if (isValid(cur, row, col)) {
        cur[row][col] = 'Q';
        dfs(cur, row + 1);
        cur[row][col] = '.';
      }
    }
  };

  dfs(board, 0);

  return res;
};

console.log(solveNQueens(5));
