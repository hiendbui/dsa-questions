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


//O(n) ST 
function minHeightBst(array, startIdx=0, endIdx=array.length-1) {
	if (startIdx > endIdx) return null;
    const midIdx = Math.floor((startIdx+endIdx)/2);
	const root = new BST(array[midIdx]);
	root.left = minHeightBst(array, startIdx, midIdx-1);
	root.right = minHeightBst(array, midIdx+1, endIdx);
	return root;
}
