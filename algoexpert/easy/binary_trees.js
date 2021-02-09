class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//O(n) T | O(n) S
function findClosestValueInBst(tree, target) {
	let curDiff = Infinity;
	let closest = Infinity;
	let stack = [tree];
	
	while (stack.length > 0) {
		const node = stack.pop()
		const left = node.left;
		const right = node.right;
		const diff = Math.abs(node.value - target);
		
		if (left) stack.push(left);
		if (right) stack.push(right);
		
		if (diff < curDiff) {
			closest = node.value;
			curDiff = diff
		}
	}
	
	return closest
}

//O(n) T | O(n) S
function branchSums(root) {
	let sums = [];
	calculateBranchSums(root, 0, sums);
	return sums
}

function calculateBranchSums(node, runningSum, sums) {
	let newRunningSum = runningSum + node.value;
	
	if (!node.left && !node.right) {
		sums.push(newRunningSum);
		return;
	};
	
	if (node.left) calculateBranchSums(node.left, newRunningSum, sums);
	if (node.right) calculateBranchSums(node.right, newRunningSum, sums);
}



//O(n) T | O(h) S (where n is # of nodes and h is height of binary tree)
function nodeDepths(node, sum = 0, level = 0) {
	if (!node) return sum;
	let newSum = sum + level
	
	newSum += nodeDepths(node.left,sum, level + 1);
	newSum += nodeDepths(node.right, sum, level + 1);
	
	return newSum
}
