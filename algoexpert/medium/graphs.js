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

//O(mn) ST
function riverSizes(matrix) {
  const visited = new Set();
	const sizes = [];
	
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] && !visited.has(`${i},${j}`)) {
				sizes.push(bfs(matrix,i,j,visited));
			}
		}
	}
	return sizes;
}

function bfs(matrix,i,j,visited) {
	let count = 0;
	const queue = [[i,j]];
	visited.add(`${i},${j}`);
	while (queue.length) {
		const coords = queue.shift();
		const x = coords[0];
		const y = coords[1];
		
		if (x < matrix.length-1 && matrix[x+1][y]) {
			if (!visited.has(`${x+1},${y}`)) {
				queue.push([x+1,y]);
				visited.add(`${x+1},${y}`);
			}
		}
		
		if (x > 0 && matrix[x-1][y]) {
			if (!visited.has(`${x-1},${y}`)) {
				queue.push([x-1,y]);
				visited.add(`${x-1},${y}`);
			}
		}
		
		if (y < matrix[0].length-1 && matrix[x][y+1]) {
			if (!visited.has(`${x},${y+1}`)) {
				queue.push([x,y+1]);
				visited.add(`${x},${y+1}`);
			}
		}
		
		if (y > 0 && matrix[x][y-1]) {
			if (!visited.has(`${x},${y-1}`)) {
				queue.push([x,y-1]);
				visited.add(`${x},${y-1}`);
			}
		}
		
		count++;
	}
	return count;
}



class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

//Non-Optimal: O(n) T | O(n) S where n is # of nodes
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const ancestors = new Set([descendantOne, descendantTwo]);
	let i = 2;
	let ancestorOne = descendantOne;
	let ancestorTwo = descendantTwo;
	while (ancestorOne || ancestorTwo) {
		if (ancestorOne.ancestor) {
			ancestors.add(ancestorOne.ancestor);
			ancestorOne = ancestorOne.ancestor;
			i++;
			if (ancestors.size !== i) return ancestorOne;
		}
		
		if (ancestorTwo.ancestor) {
			ancestors.add(ancestorTwo.ancestor);
			ancestorTwo = ancestorTwo.ancestor;
			i++;
			if (ancestors.size !== i) return ancestorTwo;
		}
	}
	return topAncestor;
}

//Optimal: O(d) T | O(1) S where d is depth of tree