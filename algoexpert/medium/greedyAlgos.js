//O(n) ST
function taskAssignment(k, tasks) {
	const idxSortedByVal = countingSort(tasks);
	
	const assignments = [];
	
	let left = 0;
	let right = idxSortedByVal.length-1;
	
	while (left < right) {
		const assignment = [idxSortedByVal[left], idxSortedByVal[right]];
		assignments.push(assignment);
		left++;
		right--;
	}
	
	return assignments;
}

function countingSort(arr) {
	const countArr = [];

    arr.forEach((ele,idx) => {
		countArr[ele] ? countArr[ele].push(idx) : countArr[ele] = [idx];
	})
	
	const sortedIdx = [];
	for (let i = 0; i < countArr.length; i++) {
		if (countArr[i]) {
			countArr[i].forEach(idx => sortedIdx.push(idx));
		}
	};
	
	return sortedIdx;
}


//O(n) T | O(1) S
function validStartingCity(distances, fuel, mpg) {
	let milesLeft = 0;
	let startIdx = 0;
	let milesLeftAtStartIdx = 0;
	
	for (let i=1; i<fuel.length; i++) {
		milesLeft += fuel[i-1] * mpg - distances[i-1];
		if (milesLeft < milesLeftAtStartIdx) {
			startIdx = i;
			milesLeftAtStartIdx = milesLeft;
		}
	}
	return startIdx;
}