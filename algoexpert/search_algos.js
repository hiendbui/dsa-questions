//O(log(n)) T | O(1) space
function binarySearch(array, target) {
    if (array.length === 0) return -1;
	
	const midIdx = Math.floor(array.length/2);
	
	if (array[midIdx] === target) {
		return midIdx;
	} else if (array[midIdx] > target) {
		return binarySearch(array.slice(0,midIdx), target);
	} else {
		let res = binarySearch(array.slice(midIdx+1),target)
		return res === -1 ? -1 : res + midIdx + 1
	}
}

//O(n) T | O(1) S
const findThreeLargestNumbers = array => {
	let threeLargest = new Array(3).fill(-Infinity);
	
	array.forEach(num => {
		if (num > threeLargest[0]) {
			if (num <= threeLargest[1]) {
				threeLargest[0] = num;
			} else if (num <= threeLargest[2]) {
				threeLargest = [threeLargest[1], num, threeLargest[2]];
			} else {
				threeLargest = [threeLargest[1], threeLargest[2], num];
			};
		};
	});
	
	return threeLargest
}


//DFS: O(v + e) T | O(v) (where v is vertices & e is edges) 
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
	array.push(this.name)

	this.children.forEach((child) => {
			child.depthFirstSearch(array);
	})

    return array;
  }
}