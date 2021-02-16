// BFS O(v+e)T | O(v) S
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    let queue = [this];
		while (queue.length > 0) {
			let node = queue.shift();
			array.push(node.name);
			node.children.forEach((child) => {
				queue.push(child);
			})
		}
		return array;
  }
}

//O(n) T | O(d) S where n is # of nodes and d is depth of tree

function validateBst(tree, minValue = -Infinity,maxValue = Infinity) {
	if (tree === null) return true;
	if (tree.value < minValue || tree.value >= maxValue) return false;
	
	return validateBst(tree.left, minValue, tree.value) && validateBst(tree.right, tree.value,maxValue)
	
}