class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//O(n) T | O(1) S , where n is # of nodes
function reverseLinkedList(head) {
    let prevNode = head;
	let curNode = head.next;
	head.next = null;
	
	while (curNode) {
		let temp = curNode.next;
		curNode.next = prevNode;
		prevNode = curNode;
		curNode = temp;
	}
	
	return prevNode;
}