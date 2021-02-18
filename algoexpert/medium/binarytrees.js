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

//O(n) T | O(d) S
function binaryTreeDiameter(tree,longest=0) {
	if (tree === null) return longest;
	if (tree.left) longest++;
	if (tree.right) longest++;
	let leftDiameter = binaryTreeDiameter(tree.left,longest);
	let rightDiameter = binaryTreeDiameter(tree.right,longest);
	return Math.max(leftDiameter,rightDiameter);
}