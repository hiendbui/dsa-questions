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

