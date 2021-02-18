class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//O(n) T | O(d) S where d is depth
function invertBinaryTree(tree) {
    if (tree !== null) {
		let temp = invertBinaryTree(tree.left);
		tree.left = invertBinaryTree(tree.right);
		tree.right = temp;
	}
	return tree
}

//O(n) T | O(h) S
function binaryTreeDiameter(tree,longest=0) {
	if (tree === null) return longest;
	if (tree.left) longest++;
	if (tree.right) longest++;
	let leftDiameter = binaryTreeDiameter(tree.left,longest);
	let rightDiameter = binaryTreeDiameter(tree.right,longest);
	return Math.max(leftDiameter,rightDiameter);
}


//O(n) | O(n) S
function findSuccessor(tree, node) {
	const inOrderArr = inOrderTraversal(tree);
	for (let i=0; i<inOrderArr.length-1; i++) {
		if (inOrderArr[i] === node) return inOrderArr[i + 1];
	}
		
  return null;
}

function inOrderTraversal(node,array=[]) {
	if (node !== null) {
		inOrderTraversal(node.left,array);
		array.push(node);
		inOrderTraversal(node.right,array);
	} 
	return array;
}


//O(h) | O(1) S where h is the height of the tree
function findSuccessorOptimized(tree, node) {
  if (node.right) {
		return leftMostChild(node.right);
	}
	
  return rightMostAncestor(node);
}

function leftMostChild(node) {
	let curNode = node;
	while(curNode.left) {
		curNode = curNode.left
	};
	return curNode
}

function rightMostAncestor(node) {
	let curNode = node;
	while(curNode.parent && curNode.parent.right === curNode) {
		curNode = curNode.parent;
	}
	return curNode.parent;
}