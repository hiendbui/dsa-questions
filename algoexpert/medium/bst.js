//O(n) T | O(d) S where n is # of nodes and d is depth of tree

function validateBst(tree, minValue = -Infinity,maxValue = Infinity) {
	if (tree === null) return true;
	if (tree.value < minValue || tree.value >= maxValue) return false;
	
	return validateBst(tree.left, minValue, tree.value) && validateBst(tree.right, tree.value,maxValue)
	
}

//BST Traversal O(n) T | O(n) S
function inOrderTraverse(tree, array) {
	if (tree !== null) {
		inOrderTraverse(tree.left,array);
		array.push(tree.value);
		inOrderTraverse(tree.right,array);
	}
	return array;
}

function preOrderTraverse(tree, array) {
  if (tree !== null) {
		array.push(tree.value);
		preOrderTraverse(tree.left, array);
		preOrderTraverse(tree.right, array);
	}
	return array;
}

function postOrderTraverse(tree, array) {
  if (tree !== null) {
		postOrderTraverse(tree.left,array);
		postOrderTraverse(tree.right,array);
		array.push(tree.value);
	}
	return array;
}