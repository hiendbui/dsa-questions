//O(n) T | O(1) S
function removeKthNodeFromEnd(head, k) {
    let count = 0;
	let curNode = head;
	while (curNode) {
		count++;
		curNode = curNode.next; 
	};
	
	let numNode = count - k;
	curNode = head;
	if (numNode === 0) {
		head.value = head.next.value;
		head.next = head.next.next;
		return;
	}
	let i = 0;
	while (i < numNode-1) {
		curNode = curNode.next;
		i++;
	};
	
	curNode.next = curNode.next.next;
}

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


//sum of linked lists
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    const sum = calcNumber(linkedListOne) + calcNumber(linkedListTwo);
	const sumArr = sum.toString().split('');
	sumArr.forEach((numStr,i) => sumArr[i] = parseInt(numStr));
	
	const sumLinkedList = new LinkedList(sumArr[sumArr.length-1]);
	let curNode = sumLinkedList;
	for (let i = sumArr.length-2; i>=0; i--) {
		curNode.next = new LinkedList(sumArr[i]);
		curNode = curNode.next;
	}
	
	return sumLinkedList;
}

function calcNumber(linkedList) {
	const arr = [];
	let curNode = linkedList;
	
	while (curNode) {
		arr.push(curNode.value.toString());
		curNode = curNode.next;
	}
	
	return parseInt(arr.reverse().join(''));
}