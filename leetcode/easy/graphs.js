//O(n) ST where n is # of nodes in tree
const isSymmetric = function(root) {
    let queue = [root.left,root.right];
    
    while (queue.length > 0) {
        const left = queue.shift();
        const right = queue.shift();
        if (!left && !right) {
            continue;
        } else if (!left || !right) {
            return false;
        }
        
        if (left.val !== right.val) return false;
        queue.push(left.left);
        queue.push(right.right);
        queue.push(left.right);
        queue.push(right.left);
    }
    
    return true;
};