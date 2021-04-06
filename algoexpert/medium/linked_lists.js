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