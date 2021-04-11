//O(n) ST
const inorderTraversal = function(root) {
    if (!root) return [];
    let resArr = [];
    let visited = new Set();
    let stack = [root];
 
    while (stack.length) {
        let curNode = stack[stack.length-1];
        if (curNode.left && !visited.has(curNode)) {
            stack.push(curNode.left);
        } else {
            curNode = stack.pop();
            resArr.push(curNode.val);
            if (curNode.right) {
                stack.push(curNode.right);
            }
        }
        visited.add(curNode);
    }
    
    return resArr;
};

// A binary tree is named Even-Odd if it meets the following conditions:

// 1. The root of the binary tree is at level index 0, its children are at level 
//index 1, their children are at level index 2, etc.
// 2. For every even-indexed level, all nodes at the level have odd integer values in 
// strictly increasing order (from left to right).
// 3. For every odd-indexed level, all nodes at the level have even integer values in 
// strictly decreasing order (from left to right).

// Given the root of a binary tree, return true if the binary tree is Even-Odd, 
// otherwise return false.

var isEvenOddTree = function(root) {
    let curLevel = [root];
    let nextLevel = [];
    let levelNum = 0;
    
    while (curLevel.length || nextLevel.length) {
        if (!nextLevel.length) {
            if (levelNum % 2 === 0) {
                if (!isOddAndIncreasing(curLevel)) return false;
            } else {
                if (!isEvenAndDecreasing(curLevel)) return false;
            }
        }
        
        if (curLevel.length) {
            let parent = curLevel.shift();
            if (parent.left) nextLevel.push(parent.left);
            if (parent.right) nextLevel.push(parent.right);
        } else {
            curLevel = nextLevel;
            nextLevel = [];
            levelNum++;
        }
    }
    
    return true;
};

const isEvenAndDecreasing = level => {
    if (level[0].val % 2 === 1) return false;
    
    for (let i = 1; i < level.length; i++) {
        if (level[i].val >= level[i-1].val || level[i].val % 2) return false;
    }
    return true;
}

const isOddAndIncreasing = level => {
    if (level[0].val % 2 === 0) return false;
    
    for (let i = 1; i < level.length; i++) {
        if (level[i].val <= level[i-1].val || level[i].val % 2 === 0) return false;
    }
    return true;
}