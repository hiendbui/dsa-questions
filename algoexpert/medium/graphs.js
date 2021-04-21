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

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const depthOne = getDepth(descendantOne, topAncestor);
	const depthTwo = getDepth(descendantTwo, topAncestor);
	
	if (depthOne > depthTwo) {
		descendantOne = getDescAtSameLevel(descendantOne, depthOne - depthTwo);
	} else if (depthOne < depthTwo) {
		descendantTwo = getDescAtSameLevel(descendantTwo, depthTwo - depthOne);
	}
	
	while (descendantOne !== descendantTwo) {
		descendantOne = descendantOne.ancestor;
		descendantTwo = descendantTwo.ancestor;
	}
	
	return descendantOne;
}

function getDepth(descendant, topAncestor) {
	let depth = 0;
	while (descendant !== topAncestor) {
		depth++;
		descendant = descendant.ancestor;
	}
	return depth;
}

function getDescAtSameLevel(descendant, diff) {
	while (diff) {
		descendant = descendant.ancestor;
		diff--;
	}
	return descendant;
}



//Solution to removeIslands w/ DFS: O(mn) ST
function removeIslands(matrix) {
  const borderedIslands = findBorderedIslands(matrix);
	
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length;j++) {
			if (!borderedIslands.has(`${i},${j}`) && matrix[i][j]) {
				matrix[i][j] = 0;
			}
		}
	}
	
	return matrix;
}

function findBorderedIslands(matrix) {
	const bordered = new Set();
	
	for (let i = 0; i < matrix.length; i++) {
		if (!bordered.has(`${i},0`) && matrix[i][0]) {
			dfs(matrix,i,0, bordered);
		};
		[0,0]
		[1,0]
		let j = matrix[0].length-1;
		if (!bordered.has(`${i},${j}`) && matrix[i][j]) {
			dfs(matrix,i,j, bordered);
		}
	};
	
	for (let j = 0; j < matrix[0].length; j++) {
		if (!bordered.has(`0,${j}`) && matrix[0][j]) {
			dfs(matrix,0,j, bordered);
		}
		
		let i = matrix.length-1;
		if (!bordered.has(`${i},${j}`) && matrix[i][j]) {
			dfs(matrix,i,j, bordered);
		};
	};
	
	return bordered;
}

function dfs(matrix, i, j, bordered) {
	if (i < 0 || i > matrix.length - 1) return;
	if (j < 0 || j > matrix[0].length - 1) return;
	if (matrix[i][j] === 0 || bordered.has(`${i},${j}`)) return;
	
	bordered.add(`${i},${j}`);
	dfs(matrix, i+1, j, bordered);
	dfs(matrix, i-1, j, bordered);
	dfs(matrix, i, j+1, bordered);
	dfs(matrix, i, j-1, bordered);
}




//O(v+e) T | O(v) where v is vertices and e is edges
function cycleInGraph(edges) {
  	const visited = new Set();
	const curStack = new Array(edges.length).fill(false);
	
	for (let i=0; i < edges.length; i++) {
		if (visited.has(i)) continue;
		
		const containsCycle = cycleExists(edges, visited, curStack, i)
		if (containsCycle) return true;
	}
	
	return false;
}

//dfs
function cycleExists(edges, visited, curStack, curNode) {
	visited.add(curNode);
	curStack[curNode] = true;
	
	for (const node of edges) {
		if (!visited.has(node)) {
			const containsCycle = cycleExists(edges, visited, curStack, node);
			if (containsCycle) return true;
		} else if (curStack[node]){
			return true;
		}
	};
	
	curStack[curNode] = false;
	return false;
}

//O(m+n) T | O(1) S 
function searchInSortedMatrix(matrix, target) {
	let row = 0;
	let col = matrix[0].length-1;
	
	while (row < matrix.length && col >= 0) {
		const val = matrix[row][col]
		if (val === target) {
			return [row,col];
		} else if (val > target) {
			col--;
		} else {
			row++;
		}
	}
	
	return [-1,-1];
}