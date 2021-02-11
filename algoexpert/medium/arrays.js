//O(n^2) T | O(n) space
function threeNumberSum(array, targetSum) {
    const triplets = [];
	array.sort((a,b)=>a-b)
	for (let i = 0; i<array.length-2; i++) {
		let left = i+1;
		let right = array.length-1;
		while (left < right) {
			let sum = array[i] + array[left] + array[right];
			if (sum < targetSum) {
				left++;
			} else if (sum > targetSum) {
				right--;
			} else {
				triplets.push([array[i], array[left], array[right]])
				left++
				right--
			}
		}
	}
	return triplets;
}

//O(nlog(n) + mlog(m)) T | O(1) S
function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a,b)=>a-b);
	arrayTwo.sort((a,b)=>a-b);
    let lowestDiff = Infinity;
	let pair;
	let idx1 = 0;
	let idx2 = 0;
	
	while (idx1 < arrayOne.length && idx2 < arrayTwo.length) {
		let num1 = arrayOne[idx1];
		let num2 = arrayTwo[idx2];
		let curDiff = Math.abs(num1-num2);
		if (curDiff < lowestDiff) {
			lowestDiff = curDiff;
			pair = [num1,num2];
		}
		if (num1 < num2) {
			idx1++;
		} else if (num2 < num1) {
			idx2++;
		} else return pair;
	}
	
	return pair;
}

//O(n) T | O(1) S
function moveElementToEnd(array, toMove) {
  let left = 0;
	let right = array.length - 1;
	
	while(left < right) {
		if (array[left] !== toMove) {
			left++;
		} else if (array[right] === toMove) {
			right--;
		} else {
			[array[left],array[right]] = [array[right],array[left]]
		} 
	}
	return array
}