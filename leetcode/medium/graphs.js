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