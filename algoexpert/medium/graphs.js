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

// O(n) T | O(1) S
function hasSingleCycle(array) {
  let numVisited = 0;
	let curIdx = 0;
	
	while (numVisited < array.length) {
		if (numVisited > 0 && curIdx === 0) return false;
		curIdx += array[curIdx];
		curIdx = trueIdx(curIdx, array.length);
		numVisited++;
	}
	
	return curIdx === 0;
}

function trueIdx(idx, arrLength) {
	if (idx < 0) {
			return (arrLength - (-idx % arrLength)) % arrLength;
		} else {
			return idx % arrLength;
	};
}