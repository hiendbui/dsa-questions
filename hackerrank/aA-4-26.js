//All test cases passed
function efficientJanitor(weight) {
    let count = 0;
    weight.sort((a,b) => a-b)
    
    while (weight[weight.length-1] >= 2.0) {
        weight.pop();
        count++;
    }
    
    let left = 0;
    let right = weight.length-1;
    
    while (left < right) {
        if (weight[left] + weight[right] <= 3.0) {
            left++;
        } 
        
        right--;
        count++;
    }
    
    if (left === right) count++;
    return count;
}

function maxDifference(px) {
    let lowest = px[0];
    let greatestDiff = 0;
    
    for (let i = 1; i < px.length; i++) {
        if (px[i] < lowest) {
            lowest = px[i];
        }
        greatestDiff = Math.max(greatestDiff, px[i] - lowest);
    }
    
    return greatestDiff ? greatestDiff : -1;
}

function reachTheEnd(grid, maxTime, row=0, col=0, time=0, memo={}) {
    const lastRow = grid.length-1;
    const lastCol = grid[0].length-1;
    const outOfGrid = row > lastCol || col > lastRow;
    if (time > maxTime || outOfGrid || grid[row][col] === '#') return 'No';
    if (row === lastRow && col === lastCol) return 'Yes';
    
    let down = memo[`${row}${col}`];
    if (!down) {
        down = reachTheEnd(grid, maxTime, row+1, col, time+1, memo);
        memo[`${row+1}${col}`] = down;
    } 
    
    let right = memo[`${row}${col}`];
    if (!right) {
        right = reachTheEnd(grid, maxTime, row, col+1, time+1, memo);
        memo[`${row}${col+1}`] = right;
    } 
    
    return down === 'Yes' || right === 'Yes' ? 'Yes' : 'No';
}