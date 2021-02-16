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