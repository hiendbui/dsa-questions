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