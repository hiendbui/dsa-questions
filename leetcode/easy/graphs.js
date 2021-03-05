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



//O(n) ST
const hasCycle = function(head) {
    const nodes = new Set();
    let curNode = head;
    
    while (curNode) {
        if (nodes.has(curNode)) return true; 
        nodes.add(curNode);
        curNode = curNode.next;
    }
    
    return false;
};
//More Optimal (tortoise & the hare)
//O(n) T | O(1) S
const hasCycle = function(head) {
    if (!head || !head.next) return false;
    
    let left = head;
    let right = head.next;
    
    while (right) {
        if (right.next === null) return false;
        
        if (left === right) return true;
        left = left.next;
        right = right.next.next;
    };
    
    return false;
};