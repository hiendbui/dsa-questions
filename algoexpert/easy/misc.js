//O(nlog(n)) T (due to .sort()) | O(1) S;
function minimumWaitingTime(queries) {
    queries.sort((a,b)=>(a-b))
	
	let sum = 0;
	queries.forEach((query,idx)=> {
		sum += (queries.length-(idx+1)) * query
	})
	return sum									
}


//O(n) T | O(1) S (where n is # of nodes in linked list)
function removeDuplicatesFromLinkedList(linkedList) {
    let curNode = linkedList
	while (curNode) {
        let nextNode = curNode.next;
		while (nextNode && curNode.value === nextNode.value) {
            nextNode = nextNode.next
		}
		curNode.next = nextNode
		curNode = curNode.next
	}
	
	return linkedList
}

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//O(nlog(n)) time | O(1) S
function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort((a,b)=>a-b);
	blueShirtHeights.sort((a,b)=>a-b);
	let back;
	let front;
	if (redShirtHeights[0] > blueShirtHeights[0]) {
		back = redShirtHeights;
		front = blueShirtHeights;
	} else if (blueShirtHeights[0] > redShirtHeights[0]) {
		back = blueShirtHeights;
		front = redShirtHeights;
	} else return false;
	
  	for (let i = 0; i < redShirtHeights.length; i++) {
		if (back[i] <= front[i]) return false;
	}
	
  	return true;
}

//O(nlogn) T | O(1) S
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  	redShirtSpeeds.sort((a,b)=>a-b);
	blueShirtSpeeds.sort((a,b)=>a-b);
	
	if (fastest === true) {
		return calcMax(redShirtSpeeds,blueShirtSpeeds);
	} else {
		return calcMin(redShirtSpeeds,blueShirtSpeeds);
	}
}

function calcMax(arr1,arr2) {
	let idx1 = 0;
	let idx2 = arr1.length - 1;
	let total = 0;
	
	while (idx2 >= 0) {
		total += Math.max(arr1[idx1],arr2[idx2]);
		idx1++;
		idx2--;
	}
	
	return total;
}

function calcMin(arr1,arr2) {
	let total = 0;
	for (let i = 0; i < arr1.length; i++) {
		total += Math.max(arr1[i],arr2[i]);
	}
	return total;
}