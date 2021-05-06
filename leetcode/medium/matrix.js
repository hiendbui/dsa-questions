// Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands 
// horizontally or vertically. You may assume all four edges of the grid are all 
// surrounded by water.

//O(m*n) T | O(min(m,n)) S
const numIslands = function(grid) {
    let count = 0;
    
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (grid[i][j] === '1') {
                grid[i][j] = '0';
                count++;
                const queue = [[i,j]];

                while (queue.length) {
                    const coords = queue.shift();
                    const r = coords[0];
                    const c = coords[1];
                    
                    if (r > 0 && grid[r-1][c] === '1') {
                        queue.push([r-1,c]);
                        grid[r-1][c] = '0'
                    } 
                    if (c > 0 && grid[r][c-1] === '1') {
                        queue.push([r,c-1]);
                        grid[r][c-1] = '0'
                    } 
                    if (r < grid.length-1 && grid[r+1][c] === '1') {
                        queue.push([r+1,c]);
                        grid[r+1][c] = '0'
                    } 
                    if (c < grid[0].length-1 && grid[r][c+1] === '1') {
                        queue.push([r,c+1]);
                        grid[r][c+1] = '0'
                    }
                }    
            }
        }      
    }
    
    return count;
};




// Given a m x n grid filled with non-negative numbers, find a path from top left 
// to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

//Brute force with recursion and memoization

const minPathSum = function(grid, i=0, j=0, memo={}) {
    let sum = grid[i][j];
    if (i === grid.length-1 && j === grid[0].length-1) return sum;
    let downSum = Infinity;
    let rightSum = Infinity;
    
    if (i < grid.length-1) {
        downSum = memo[`${i+1},${j}`] ? memo[`${i+1},${j}`] : minPathSum(grid, i+1, j, memo);
    }
    
    if (j < grid[0].length-1) {
        rightSum = memo[`${i},${j+1}`] ? memo[`${i},${j+1}`] : minPathSum(grid, i, j+1, memo);
    }
    
    sum += Math.min(downSum,rightSum);
    memo[`${i},${j}`] = sum;
    return sum;
};

//Most Optimal with Dynamic Programming
//O(mn) T | O(1) S
const minPathSum = function(grid) {
    for (let r = 1; r < grid.length; r++) {
        grid[r][0] += grid[r-1][0];   
    }
    
    for (let c = 1; c < grid[0].length; c++) {
        grid[0][c] += grid[0][c-1];
    }
    
    for (let r = 1; r < grid.length; r++) {
        for (let c = 1; c < grid[0].length; c++) {
            grid[r][c] += Math.min(grid[r-1][c],grid[r][c-1]);
        }
    }
    
    return grid[grid.length-1][grid[0].length-1];
};

//79. Word Search
// Given an m x n grid of characters board and a string word, return true if word 
// exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where 
// adjacent cells are horizontally or vertically neighboring. The same letter cell 
// may not be used more than once.

const exist = function(board, word) {
  for (let i=0; i < board.length; i++) {
      for (let j=0; j < board[0].length; j++) {
          if (dfs(board, word, 0, i, j)) return true;
      }
  }  
    
    return false;
};

const dfs = function(board, word, idx, row, col, visited=new Set()) {
    const outOfGrid = row < 0 || col < 0 || row >= board.length || col >= board[0].length;
    const alreadyVisited = visited.has(`${row},${col}`);
    
    if (alreadyVisited || outOfGrid || board[row][col] !== word[idx]) { 
        return false;
    } else if (word.length === idx + 1) {
        return true;
    } else {
        visited.add(`${row},${col}`);
    }
    
    const up = dfs(board, word, idx+1, row-1, col, new Set(visited));
    const down = dfs(board, word, idx+1, row+1, col, new Set(visited));
    const right = dfs(board, word, idx+1, row, col+1, new Set(visited));
    const left = dfs(board, word, idx+1, row, col-1, new Set(visited));
    
    return up || down || right || left;
};