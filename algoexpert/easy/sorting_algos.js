// Bubble Sort: O(n^2) T | O(1) S
function bubbleSort(array) {
  let sorted = false;
	
	while (!sorted) {
		sorted = true;
		for (let i=0; i<array.length-1;i++) {
			if (array[i] > array[i+1]) {
				[array[i] , array[i+1]] = [array[i+1] , array[i]];
				sorted = false
			}
		}
	}
	return array;
}

// Insertion Sort: O(n^2) T | O(1) S
function insertionSort(array) {
  for (let i=1; i<array.length; i++) {
		let newIdx = i
		for (let j=i-1; j >= 0; j--) {
			if (array[newIdx] < array[j]) {
				[array[j],array[newIdx]] = [array[newIdx],array[j]];
				newIdx -= 1;
			} else break;
		}
	}
	return array
}

//Selection Sort: O(n^2) T | O(1) S
function selectionSort(array) {
	let startIdx = 0;
	
	while (startIdx < array.length-1) {
		let smallestIdx = startIdx;
		for (i=startIdx+1;i<array.length;i++) {
			if (array[i] < array[smallestIdx]) {
				smallestIdx = i;
			}
		}
		[array[startIdx], array[smallestIdx]] = [array[smallestIdx], array[startIdx]]
		startIdx++
	}
	return array
}