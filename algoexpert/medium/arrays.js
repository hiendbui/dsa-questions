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

//O(n) T | O(1) S 
function isMonotonic(array) {
	let increasing = false;
	let decreasing = false;
	for (i=0; i<array.length; i++) {
		let curDiff = array[i+1]-array[i]
		if (increasing && curDiff < 0) {
			return false;
		} else if (decreasing && curDiff > 0) {
			return false;
		} else if (!increasing && !decreasing) {
			if (curDiff > 0) increasing = true;
			if (curDiff < 0) decreasing = true;
		}
	}
	return true
}

//O(m*n) T | O(m*n) S
function spiralTraverse(array) {
	let startRow = 0;
	let endRow = array.length-1;
	let startCol = 0;
	let endCol = array[0].length-1;
	let newArr = [];
	
	while (startRow <= endRow && startCol <= endCol) {
		for (let i = startCol; i <= endCol; i++) {
			newArr.push(array[startRow][i])
		}
		
		for (let i = startRow+1; i <= endRow; i++) {
			newArr.push(array[i][endCol]);
		}
		
		for (let i = endCol-1; i >= startCol; i--) {
			if (startRow === endRow) break;
			newArr.push(array[endRow][i]);
		}
		
		for (let i = endRow-1; i > startRow; i--) {
			if (startCol === endCol) break;
			newArr.push(array[i][startCol]);
		}
		
		startRow++;
		endRow--;
		startCol++;
		endCol--
	}
	return newArr
 }